"use client"

import { useContext } from "react"
import { Box, Container, Flex, Heading, IconButton, ScrollArea, Text, Card } from "@radix-ui/themes"
import { AiOutlineClose } from "react-icons/ai"
import { ChatContext } from "@/components"

export type AboutPanelProps = {}

const AboutPanel = (_props: AboutPanelProps) => {
  const { openAboutPanel, onCloseAboutPanel } = useContext(ChatContext)

  return openAboutPanel ? (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      className="absolute top-0 z-10 flex-1"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Flex justify="between" align="center" py="5" px="6" style={{ backgroundColor: "var(--gray-a2)" }}>
        <Heading size="5">About The Grid</Heading>
        <IconButton size="3" variant="ghost" color="gray" radius="full" onClick={onCloseAboutPanel}>
          <AiOutlineClose className="size-5" />
        </IconButton>
      </Flex>
      <ScrollArea className="flex-1" type="auto" scrollbars="vertical">
        <Container size="3" className="px-6 py-8">
          <Flex direction="column" gap="8">
            <Box>
              <Text as="p" size="4" className="leading-normal">
                Simple Chat Interface using the Grid. It's an open-source utility that
                demonstrates how to leverage The Grid's OpenAI Endpoint, allowing developers to quickly integrate with a
                Grid Endpoint in thousands of existing applications that support OpenAI.
              </Text>
            </Box>

            <Card size="3">
              <Flex direction="column" gap="4">
                <Heading size="5">Current Model</Heading>
                <Text as="p" size="3" weight="bold">
                  aphrodite/deepseek-ai/DeepSeek-R1-Distill-Llama-70B
                </Text>
              </Flex>
            </Card>

            <Card size="3">
              <Flex direction="column" gap="4">
                <Heading size="5">Token Limit (For this demo)</Heading>
                <Text as="p" size="3" weight="bold">
                  500
                </Text>
              </Flex>
            </Card>

            <Box>
              <Heading size="4" className="mb-3">
                About the Model
              </Heading>
              <Text as="p" size="3" className="leading-normal">
                The current flagship model is a reasoning model by DeepSeek, a 70B distilled model that is open source
                on Hugging Face. This implementation is designed to be super lightweight, with more robust applications
                for The Grid coming soon!
              </Text>
            </Box>

            <Box>
              <Heading size="4" className="mb-3">
                A Note:
              </Heading>
              <Text as="p" size="3" className="leading-normal">
                The Grid is a platform in it's early stages, and speed and performance is not yet optimized. We are working on various integrations within The Grid to showcase the functions that can be used by developers worldwide.
              </Text>
            </Box>
          </Flex>
        </Container>
      </ScrollArea>
    </Flex>
  ) : null
}

export default AboutPanel

