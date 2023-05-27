import { openai } from "@config/openai"
import { ChatCompletionRequestMessageRoleEnum } from "openai"

const INITIAL_MESSAGES = [
	{
		role: ChatCompletionRequestMessageRoleEnum.System,
		content: `
			Esto es un test, responde únicamente con el siguiente texto: "Openai running"
		`
	}
]


export const analyzeOffer = async (text: string) => {
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			...INITIAL_MESSAGES,
			{
				role: ChatCompletionRequestMessageRoleEnum.User,
				content: text
			}
		]
	})

	return completion.data.choices[0].message
}

