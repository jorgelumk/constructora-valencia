import os
import re

replacements = [
    (r'Barcelona', 'Valencia'),
    (r'barcelona', 'valencia'),
    (r'Cataluña', 'la Comunitat Valenciana'),
    (r'Hospitalet, Sant Cugat…', 'Paterna, Torrent…'),
    (r'Hospitalet…', 'Paterna…'),
    (r'686 38 28 91', '960 73 12 06'),
    (r'Carrer de la Diputació 234', 'Carrer de Sant Vicent Màrtir, 85'),
    (r'08007', '46002')
]

directories = ['app', 'components']

for d in directories:
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.ts'):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = re.sub(old, new, new_content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Updated {filepath}")
