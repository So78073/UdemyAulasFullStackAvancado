import re

# Texto de exemplo
texto = "Meu endereço de e-mail é umnegaonopedaco@email.com e o seu é outro_usuario@email.com.br"

# Expressão regular para encontrar endereços de e-mail
padrao_email = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

# Encontrar todos os endereços de e-mail no texto
emails_encontrados = re.findall(padrao_email, texto)

# Imprimir os endereços de e-mail encontrados
print(emails_encontrados)
