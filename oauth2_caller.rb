# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    oauth2_caller.rb                                   :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: ntantaou <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2019/12/23 10:44:52 by ntantaou          #+#    #+#              #
#    Updated: 2019/12/23 10:46:24 by ntantaou         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

require 'oauth2'

class OAuth2Caller

	attr_reader :token

	def initialize
		@token = get_access_token
	end

	def get_request url, params = {}
		response 
