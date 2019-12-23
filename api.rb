# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    api.rb                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: ntantaou <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2019/12/23 10:49:21 by ntantaou          #+#    #+#              #
#    Updated: 2019/12/23 10:56:10 by ntantaou         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #
#!/usr/bin/env ruby
#
require "oauth2"
UID = "0fc0531514fa9e62fb75dcc17c45141f6c2cac5900db3beb957e1d0ec044e49e"
SECRET = "1960ded161ae5daa575790df1ace586c18075426529dee515a2c282d95561177"

client = OAuth2::Client.new(UID, SECRET, site: "https://api.intra.42.fr")

token = client.client_credentials.get_token

puts token
