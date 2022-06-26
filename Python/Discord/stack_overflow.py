import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='.')

@bot.command()
async def pin_messages(ctx, limit=100):
    messages = await ctx.channel.history(limit=limit).flatten()
    for message in messages: 
            message_emoji= ''.join(map(str, message.reactions))
            print(discord.Reaction(message))
            #message_emoji_count= ''.join(map(str, message.reactions.count))
            #print(message_emoji_count)
            

           # if  (message_emoji == '✅') and message_emoji_count > 10:
           #     await message.pin()


bot.run('')
