import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Cover block" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/Frame%2022.png?v=2021-04-15T11:36:35.860Z) center/cover no-repeat scroll padding-box" min-height="800px" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				align-items="center"
				padding="120px 0px 0px 0px"
				sm-padding="60px 0px 0px 0px"
				lg-padding="80px 0px 0px 0px"
			/>
			<Text
				font="bold 72px --fontFamily-googlePhilosopher"
				margin="0 0px 0px 0px"
				md-font="bold 64px --fontFamily-googlePhilosopher"
				sm-font="bold 48px --fontFamily-googlePhilosopher"
				sm-margin="0 0 0 0px"
				sm-max-width="320px"
				sm-width="auto"
				width="600px"
				xs-max-width="310px"
				text-align="center"
				md-margin="0 0 0 0"
				md-max-width="512px"
			>
				Gravida turpis odio amet arcu{"\n\n"}
			</Text>
			<Text
				color="#808080"
				font="20px --fontFamily-googleInter"
				margin="40px 0px 0px 0px"
				sm-font="18px --fontFamily-googleInter"
				sm-margin="24px 0 0 0px"
				sm-max-width="320px"
				sm-width="auto"
				width="600px"
				xs-max-width="310px"
				text-align="center"
				md-margin="24px 0 0 0"
				md-max-width="512px"
			>
				Felis netus leo id non. A, scelerisque scelerisque congue erat malesuada amet sit posuere sit. Posuere id aenean viverra sed. Libero bibendum.{"\n\n"}
			</Text>
			<Box
				width="auto"
				height="auto"
				display="flex"
				margin="60px 0px 0px 0px"
				sm-flex-direction="column"
				sm-align-items="center"
			>
				<Button
					margin="0px 32px 0px 0px"
					border-radius="48px"
					padding="20px 48px 20px 48px"
					font="normal 500 20px/1 --fontFamily-googleInter"
					background="#5B4FE3"
					color="#ffffff"
					sm-margin="0px 0 32px 0px"
					transition="all 0.5s ease 0s"
					hover-background="#776ce0"
					hover-color="#fff"
					hover-box-shadow="0 4px 20px 0 rgba(91, 79, 227, 0.45)"
					active-background="#4d41cd"
					active-color="#ffffff"
					box-shadow="0 4px 20px 0 rgba(91, 79, 227, 0)"
				>
					Try for Free{"\n\n"}
				</Button>
				<Button
					display="block"
					border-radius="48px"
					padding="20px 48px 20px 48px"
					font="normal 500 20px/1 --fontFamily-googleInter"
					background="#FFFFFF"
					color="#5B4FE3"
					box-shadow="0 4px 20px 0 rgba(91, 79, 227, 0.45)"
					transition="all 0.5s ease 0s"
					hover-box-shadow="0 4px 20px 0 rgba(91, 79, 227, 0.45)"
					hover-color="#5B4FE3"
					hover-background="#dddddd"
					active-background="#e0dfdf"
					active-color="#5B4FE3"
					active-box-shadow="0 4px 20px 0 rgba(91, 79, 227, 0)"
				>
					Book a Demo{"\n\n"}
				</Button>
			</Box>
		</Section>
		<Section quarkly-title="Team block" padding="60px 0 60px 0" height="auto">
			<Override slot="SectionContent" align-items="center" width="100%" max-width="1200px" />
			<Box
				width="100%"
				lg-display="block"
				lg-margin="0px px 0px px"
				extraLg-padding="0px 0px 0px 32px"
				sm-width="auto"
				sm-height="auto"
				sm-padding="0px 0px 0px 0"
				md-flex-direction="column"
				md-margin="0px px 0px 0"
			>
				<Text
					width="600px"
					font="bold 72px --fontFamily-googlePhilosopher"
					margin="0 0px 0px 0px"
					md-width="416px"
					md-font="bold 64px --fontFamily-googlePhilosopher"
					sm-font="bold 48px --fontFamily-googlePhilosopher"
					sm-margin="0 0 0 0px"
					sm-width="auto"
					sm-max-width="320px"
					xs-max-width="310px"
					md-text-align="left"
				>
					Meet our team
				</Text>
				<Text
					width="600px"
					font="20px --fontFamily-googleInter"
					color="#808080"
					margin="24px 0px 0px 0px"
					lg-margin="24px 0 0 0px"
					sm-font="18px --fontFamily-googleInter"
					sm-margin="24px 0 0 0px"
					sm-width="auto"
					sm-max-width="320px"
					xs-max-width="310px"
					md-max-width="512px"
				>
					Aliquam pulvinar odio mi, pulvinar eget. Ac eget pellentesque gravida id diam. Lectus tempus, facilisi amet risus leo hendrerit sodales amet sem. In nisl at malesuada non etiam. Nulla morbi.
				</Text>
			</Box>
			<Stack
				margin="60px 0 0px -32px"
				width="100%"
				padding="0px 0px 0px 0"
				lg-overflow-x="visible"
				lg-margin="60px 0 0px 0"
				lg-justify-content="center"
				extraLg-margin="60px 0 0px 0"
				justify-content="center"
			>
				{"    "}
				<StackItem
					width="auto"
					display="block"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					padding="0 0 0 0"
					lg-height="auto"
					lg-width="auto"
					height="auto"
				>
					<Override slot="StackItemContent" flex-direction="column" width="204px" height="400px" />
					{"        "}
					<Box
						background="#DBF1DD url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/photo_2021-04-14_10-51-07.png?v=2021-04-14T10:36:59.164Z)"
						width="204px"
						height="204px"
						border-radius="16px"
						display="flex"
						justify-content="center"
						align-items="center"
					/>
					<Text font="300 16px --fontFamily-googleInter" color="#101010" width="204px" margin="16px 0px 0 0px">
						Engineering
					</Text>
					<Text font="500 28px --fontFamily-googleInter" color="#101010" width="204px" margin="8px 0px 0px 0px">
						Elliot Hicks
					</Text>
					<Text font="400 12px --fontFamily-googleInter" color="#808080" width="204px" margin="8px 0px 0 0px">
						Enim massa volutpat nullam laoreet. Phasellus arcu arcu orci ultrices ut. Quis mattis eu enim, scelerisque amet et pellentesque. Volutpat ac potenti congue pharetra, ut. Fames habitant vitae, tortor, mattis vitae mauris duis lacus. Venenatis id.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="auto"
					display="block"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					lg-width="auto"
					lg-padding="16px 16px 16px 16px"
					lg-height="auto"
					height="auto"
				>
					<Override slot="StackItemContent" flex-direction="column" width="204px" height="400px" />
					{"        "}
					<Box
						background="#FDF4D4 url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/photo_2021-04-14_10-51-06.png?v=2021-04-14T10:36:59.161Z)"
						width="204px"
						height="204px"
						border-radius="16px"
						display="flex"
						justify-content="center"
						align-items="center"
					/>
					<Text font="300 16px --fontFamily-googleInter" color="#101010" width="204px" margin="16px 0px 0 0px">
						Content
					</Text>
					<Text font="500 28px --fontFamily-googleInter" color="#101010" width="204px" margin="8px 0px 0px 0px">
						Wayne Bennett
					</Text>
					<Text font="400 12px/130% --fontFamily-googleInter" color="#808080" width="204px" margin="8px 0px 0 0px">
						Mattis duis velit eget dictum id eros. Ornare vitae eget vestibulum, leo mauris hac accumsan, eu, amet. Congue nibh eget sodales ultrices cursus elit mi massa. Massa bibendum scelerisque tincidunt leo iaculis. Consectetur adipiscing.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="auto"
					display="block"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					lg-width="auto"
					lg-padding="16px 16px 16px 16px"
					lg-height="auto"
					height="auto"
				>
					<Override slot="StackItemContent" flex-direction="column" width="204px" height="400px" />
					{"        "}
					<Box
						background="#dfe9f9 url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/photo_2021-04-14_10-51-01.png?v=2021-04-14T10:36:59.161Z) 50% 0%/contain no-repeat scroll border-box"
						width="204px"
						height="204px"
						border-radius="16px"
						display="flex"
						justify-content="center"
						align-items="center"
					/>
					<Text font="300 16px --fontFamily-googleInter" color="#101010" width="204px" margin="16px 0px 0 0px">
						Design
					</Text>
					<Text font="500 28px --fontFamily-googleInter" color="#101010" width="204px" margin="8px 0px 0px 0px">
						Laura Mendez
					</Text>
					<Text font="400 12px --fontFamily-googleInter" color="#808080" width="204px" margin="8px 0px 0 0px">
						Enim massa volutpat nullam laoreet. Phasellus arcu arcu orci ultrices ut. Quis mattis eu enim, scelerisque amet et pellentesque. Volutpat ac potenti congue pharetra, ut. Fames habitant vitae, tortor, mattis vitae mauris duis lacus. Venenatis id.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="auto"
					display="block"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					lg-width="auto"
					lg-padding="16px 16px 016px 16px"
					lg-height="auto"
					height="auto"
				>
					<Override slot="StackItemContent" flex-direction="column" width="204px" height="400px" />
					{"        "}
					<Box
						background="#e2d9f4 url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/photo_2021-04-14_10-51-03.png?v=2021-04-14T10:36:59.161Z)"
						width="204px"
						height="204px"
						border-radius="16px"
						display="flex"
						justify-content="center"
						align-items="center"
					/>
					<Text font="300 16px --fontFamily-googleInter" color="#101010" width="204px" margin="16px 0px 0 0px">
						Design
					</Text>
					<Text font="500 28px --fontFamily-googleInter" color="#101010" width="204px" margin="8px 0px 0px 0px">
						Alan Fisher
					</Text>
					<Text font="400 12px --fontFamily-googleInter" color="#808080" width="204px" margin="8px 0px 0 0px">
						Enim massa volutpat nullam laoreet. Phasellus arcu arcu orci ultrices ut. Quis mattis eu enim, scelerisque amet et pellentesque. Volutpat ac potenti congue pharetra, ut. Fames habitant vitae, tortor, mattis vitae mauris duis lacus. Venenatis id.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="auto"
					display="block"
					flex-direction="column"
					justify-content="center"
					align-items="center"
					lg-padding="16px 16px 16px 16px"
					lg-width="auto"
					lg-height="auto"
					height="auto"
				>
					<Override slot="StackItemContent" flex-direction="column" width="204px" height="400px" />
					{"        "}
					<Box
						background="#dbf1dd url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/photo_2021-04-14_10-51-04.png?v=2021-04-14T10:36:59.162Z) 50% 0%/contain no-repeat"
						width="204px"
						height="204px"
						border-radius="16px"
						display="flex"
						justify-content="center"
						align-items="center"
					/>
					<Text font="300 16px --fontFamily-googleInter" color="#101010" width="204px" margin="16px 0px 0 0px">
						Engineering
					</Text>
					<Text font="500 28px/110% --fontFamily-googleInter" color="#101010" width="204px" margin="8px 0px 0px 0px">
						Olivia Stevenson
					</Text>
					<Text font="400 12px --fontFamily-googleInter" color="#808080" width="204px" margin="8px 0px 0 0px">
						Amet tincidunt tellus turpis faucibus pellentesque. Sit tincidunt in quisque tellus tortor nunc blandit laoreet. Gravida ligula mauris enim, posuere sed eu lorem tempor.{" "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="About block" padding="60px 0 60px 0">
			<Stack extraLg-justify-content="center" flex-wrap="wrap" justify-content="space-between">
				{"    "}
				<StackItem display="flex" width="auto">
					<Override
						slot="StackItemContent"
						display="block"
						position="relative"
						height="532px"
						width="532px"
						md-width="512px"
						md-height="544px"
						sm-display="flex"
						sm-flex-wrap="wrap"
						sm-justify-content="center"
						sm-width="auto"
						sm-height="auto"
					/>
					{"        "}
					<Box
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover no-repeat scroll padding-box"
						height="408px"
						margin="0px 0px 0px 0px"
						position="absolute"
						width="304px"
						md-width="308px"
						md-height="408px"
						sm-width="156px"
						sm-height="192px"
						sm-position="static"
						sm-margin="0px 12px 0px 0px"
						xs-width="100%"
						xs-margin="0px 0 0px 0px"
					/>
					<Box
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover no-repeat scroll padding-box"
						height="272px"
						margin="0px 0px 0px 0px"
						position="absolute"
						right="0px"
						top="32px"
						width="204px"
						md-width="180px"
						md-height="236px"
						md-left="332px"
						md-top="68px"
						sm-height="192px"
						sm-width="156px"
						sm-position="static"
						sm-margin="0px 0 0px 0px"
						xs-width="100%"
						xs-margin="12px 0 0px 0px"
					/>
					<Box
						background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover no-repeat scroll padding-box"
						bottom="0px"
						height="204px"
						margin="0x 0px 0px 0px"
						position="absolute"
						right="102px"
						top="auto"
						width="340px"
						md-width="340px"
						md-height="216px"
						md-left="92px"
						md-top="328px"
						md-right={0}
						sm-width="324px"
						sm-height="192px"
						sm-position="static"
						sm-margin="12px 0px 0px 0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" lg-width="auto" lg-max-width="600px" width="auto">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						width="auto"
						max-width="532px"
						extraLg-max-width="100%"
					/>
					{"        "}
					<Text
						font="bold 72px --fontFamily-googlePhilosopher"
						margin="0 0px 0px 0px"
						display="inline-block"
						lg-margin="0 0 0 0"
						md-font="bold 64px --fontFamily-googlePhilosopher"
						sm-font="bold 48px --fontFamily-googlePhilosopher"
						sm-margin="0 0 0 0px"
						sm-max-width="320px"
						sm-width="auto"
						xs-max-width="310px"
						md-margin="0 0 0 0"
					>
						About our mission{"\n\n\n        "}
					</Text>
					<Text
						color="#808080"
						font="20px --fontFamily-googleInter"
						lg-margin="24px 0 0 0"
						margin="24px 0px 0px 0px"
						sm-font="18px --fontFamily-googleInter"
						sm-margin="24px 0 0 0px"
						sm-max-width="320px"
						sm-width="auto"
						xs-max-width="310px"
						md-width="512px"
					>
						Tincidunt enim pellentesque mollis pulvinar. Sed vestibulum ac suspendisse massa ac quis. Rhoncus, risus nisl non curabitur amet. Platea nisi, tristique cras ultrices malesuada quisque ac placerat. Montes, nisl euismod tincidunt pharetra, aliquet et tincidunt. Sem congue pellentesque.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Adventages block" padding="60px 0 60px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				font="bold 72px --fontFamily-googlePhilosopher"
				margin="0 0px 0px 0px"
				md-font="bold 64px --fontFamily-googlePhilosopher"
				md-margin="0 0 0 0"
				md-max-width="512px"
				sm-font="bold 48px --fontFamily-googlePhilosopher"
				sm-margin="0 0 0 0px"
				sm-max-width="320px"
				sm-width="auto"
				text-align="center"
				width="600px"
				xs-max-width="310px"
			>
				Best Support in the Business{"\n\n"}
			</Text>
			<Text
				color="#808080"
				font="20px --fontFamily-googleInter"
				margin="24px 0px 60px 0px"
				md-margin="24px 0 60px 0"
				md-max-width="512px"
				sm-font="18px --fontFamily-googleInter"
				sm-margin="24px 0 40px 0px"
				sm-max-width="320px"
				text-align="center"
				width="600px"
				xs-max-width="310px"
				sm-width="auto"
			>
				Suscipit vitae enim consequat amet. Risus, nascetur nibh mauris vitae orci gravida amet malesuada. In.{"\n\n \n\n\n\n"}
			</Text>
			<Stack justify-content="center">
				{"    "}
				<StackItem width="auto" display="flex" padding="12px 12px 12 12px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						background="#DBF1DD"
						border-radius="20px"
						height="420px"
						extraLg-width="255px"
						width="255px"
					/>
					{"        "}
					<Box width="120px" height="120px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/Rectangle%202.png?v=2021-04-15T20:09:26.108Z) 0% 0% /auto repeat scroll padding-box" margin="40px 0px 0px 0px" />
					<Text
						font="700 28px --fontFamily-googleInter"
						margin="24px 0px 0px 0px"
						display="inline-block"
						color="#101010"
						width="204px"
					>
						30-minute{"\n"}
						<br />
					</Text>
					<Text width="208px" margin="4px 0px 0px 0px" font="600 20px/1 --fontFamily-googleInter">
						response time{"\n\n"}
					</Text>
					<Text
						color="#808080"
						font="400 12px/130% --fontFamily-googleInter"
						margin="16px 0px 0 0px"
						width="208px"
						extraLg-font="400 14px/130% --fontFamily-googleInter"
					>
						Aliquam fermentum, at amet, in nibh lorem scelerisque elementum nulla. Non placerat neque laoreet sit in. Rhoncus vestibulum amet nec egestas etiam aliquet. Semper.{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" padding="12px 12px 12 12px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						background="#FDF4D4"
						border-radius="20px"
						width="255px"
						height="420px"
						extraLg-width="255px"
					/>
					{"        "}
					<Box width="120px" height="120px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/Rectangle%202-2.png?v=2021-04-15T20:09:26.110Z) 0% 0% /auto repeat scroll padding-box" margin="40px 0px 0px 0px" />
					<Text
						font="700 28px --fontFamily-googleInter"
						margin="24px 0px 0px 0px"
						display="inline-block"
						color="#101010"
						width="204px"
					>
						96%
					</Text>
					<Text width="208px" margin="4px 0px 0px 0px" font="600 20px/1 --fontFamily-googleInter">
						satisfaction score{"\n\n"}
					</Text>
					<Text
						font="400 12px/130% --fontFamily-googleInter"
						color="#808080"
						width="208px"
						margin="16px 0px 0 0px"
						extraLg-font="400 14px/130% --fontFamily-googleInter"
					>
						Aliquam fermentum, at amet, in nibh lorem scelerisque elementum nulla. Non placerat neque laoreet sit in. Rhoncus vestibulum amet nec egestas etiam aliquet. Semper.{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" padding="12px 12px 12 12px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						background="#DFE9F9"
						border-radius="20px"
						width="255px"
						height="420px"
						extraLg-width="255px"
					/>
					{"        "}
					<Box width="120px" height="120px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/Rectangle%202-1.png?v=2021-04-15T20:09:26.108Z) 0% 0% /auto repeat scroll padding-box" margin="40px 0px 0px 0px" />
					<Text
						font="700 28px --fontFamily-googleInter"
						margin="24px 0px 0px 0px"
						display="inline-block"
						color="#101010"
						width="204px"
					>
						7.5
					</Text>
					<Text width="208px" margin="4px 0px 0px 0px" font="600 20px/1 --fontFamily-googleInter">
						average IELTS scores{"\n\n"}
					</Text>
					<Text
						font="400 12px/130% --fontFamily-googleInter"
						color="#808080"
						width="208px"
						margin="16px 0px 0 0px"
						extraLg-font="400 14px/130% --fontFamily-googleInter"
					>
						Aliquam fermentum, at amet, in nibh lorem scelerisque elementum nulla. Non placerat neque laoreet sit in. Rhoncus vestibulum amet nec egestas etiam aliquet. Semper.{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" padding="12px 12px 12 12px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						background="#E2D9F4"
						border-radius="20px"
						width="255px"
						height="420px"
						extraLg-width="255px"
					/>
					{"        "}
					<Box width="120px" height="120px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6076c1326de461001eb86fa1/images/Rectangle%202-3.png?v=2021-04-15T20:09:26.109Z) 0% 0% /auto repeat scroll padding-box" margin="40px 0px 0px 0px" />
					<Text
						font="700 28px --fontFamily-googleInter"
						margin="24px 0px 0px 0px"
						display="inline-block"
						color="#101010"
						width="204px"
					>
						1 538
					</Text>
					<Text width="208px" margin="4px 0px 0px 0px" font="600 20px/1 --fontFamily-googleInter">
						Students joined us{"\n\n"}
					</Text>
					<Text
						font="400 12px/130% --fontFamily-googleInter"
						color="#808080"
						width="208px"
						margin="16px 0px 0 0px"
						extraLg-font="400 14px/130% --fontFamily-googleInter"
					>
						Aliquam fermentum, at amet, in nibh lorem scelerisque elementum nulla. Non placerat neque laoreet sit in. Rhoncus vestibulum amet nec egestas etiam aliquet. Semper.{"\n\n\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});