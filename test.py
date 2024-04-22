import requests

def send_discord_message(webhook_url, message):
    data = {
        "content": message
    }
    response = requests.post(webhook_url, json=data)
    if response.status_code == 204:
        print("Message sent successfully to Discord!")
    else:
        print(f"Failed to send message to Discord. Status code: {response.status_code}")

# Example usage
webhook_url = "https://discord.com/api/webhooks/1231897922509996093/m747ZtKM1CnTXp4o_MHXcKCnarPZ-2oyUvXMgwjrpFmmA-VMqqqj_nP7Y5VIhHKwHNsr"
message = "Hey, I'm sending this message from a Python script!"
send_discord_message(webhook_url, message)
