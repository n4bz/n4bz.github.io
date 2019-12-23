# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    api_call.rb                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: ntantaou <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2019/12/23 10:40:42 by ntantaou          #+#    #+#              #
#    Updated: 2019/12/23 10:43:35 by ntantaou         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

require_relative 'oauth2_caller'

class API42 < OAuth2Caller

	UID		 = 0fc0531514fa9e62fb75dcc17c45141f6c2cac5900db3beb957e1d0ec044e49e
	SECRET   = 1960ded161ae5daa575790df1ace586c18075426529dee515a2c282d95561177
	ENDPOINT = 'https://api.intra.42.fr'

	def request_locations_for user, range
		get_request locations_url_for(user), range_param(range)
	end

	private

	def locations_url_for user
		"/v2/users/#{ user }/locations"
	end

	def range_param range
		{ range: { begin_at: range } }
	end

end
