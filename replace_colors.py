import os

replacements = {
    'rgba(99, 102, 241': 'rgba(193, 18, 31',
    'rgba(15, 23, 42': 'rgba(0, 48, 73'
}

target_dir = '/Volumes/Extreme SSD/Projects/portfolio/src'

for root, dirs, files in os.walk(target_dir):
    for filename in files:
        if filename.startswith('._'): continue
        if filename.endswith('.css') or filename.endswith('.jsx'):
            filepath = os.path.join(root, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                    
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                print(f"Skipping {filepath} due to error {e}")
