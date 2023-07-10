import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.banner}>
				<Image
					source={require("./src/images/dell-bXfQLglc81U-unsplash.jpg")}
					style={styles.bannerImg}
				/>
			</View>
			<View style={styles.form}>
				<View>
					<Text style={styles.wellcome}>Wellcome Back</Text>
					<Text style={{ fontSize: 15, marginTop: 16 }}>
						Today is a new day. It's your day. You shape it. Sign in to start
						managing your projects.
					</Text>
				</View>
				<View style={{}}>
					<Text style={{ fontSize: 14, marginTop: 16, marginBottom: 5 }}>
						Email
					</Text>
					<TextInput style={styles.input} placeholder="Example@gmail.com" />
					<Text style={{ fontSize: 14, marginTop: 16, marginBottom: 5 }}>
						Password
					</Text>
					<TextInput style={styles.input} placeholder="At least 8 character" />
				</View>
				<Text style={{ textAlign: "right", marginVertical: 16, color: "blue" }}>
					Forget Password?
				</Text>
				<TouchableOpacity
					style={{
						width: "100%",
						height: 44,
						backgroundColor: "#162D3A",
						borderRadius: 12,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ fontSize: 16, color: "white" }}>Sign in</Text>
				</TouchableOpacity>
				{/* Sign in Line */}
				<View
					style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
				>
					<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
					<View>
						<Text style={{ width: 100, textAlign: "center" }}>
							or sign in with
						</Text>
					</View>
					<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
				</View>
				{/* Facebook And Google Icon */}
				<View
					style={{
						flexDirection: "row",
						backgroundColor: "white",
						width: "100%",
						height: 40,
						marginTop: 16,
					}}
				>
					{/* for Google icon */}
					<View
						style={{
							width: "50%",

							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								backgroundColor: "#F3F9FA",
								width: "80%",
								height: "80%",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 12,
							}}
						>
							<Image
								source={require("./src/images/google.png")}
								style={{
									resizeMode: "contain",
									width: 24,
									height: 24,

									marginHorizontal: 5,
								}}
							/>
							<Text style={{ fontSize: 16 }}>Google</Text>
						</TouchableOpacity>
					</View>
					{/* for Facebook icon */}
					<View
						style={{
							width: "50%",

							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								backgroundColor: "#F3F9FA",
								width: "80%",
								height: "80%",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 12,
							}}
						>
							<Image
								source={require("./src/images/facebook.png")}
								style={{
									resizeMode: "contain",
									width: 24,
									height: 24,

									marginHorizontal: 5,
								}}
							/>
							<Text style={{ fontSize: 16 }}>FaceBook</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* For sign up */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ marginTop: 16, textAlign: "center" }}>
						Don't you have an account?
					</Text>
					<TouchableOpacity
						style={{ alignItems: "center", justifyContent: "center" }}
					>
						<Text style={{ color: "blue", marginTop: 15, marginLeft: 5 }}>
							Sign up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* Footer */}
			<View
				style={{
					width: "100%",
					height: "5%",

					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={{ color: "#959CB6", fontSize: 14 }}>
					© 2023 ALL RIGHTS RESERVED
				</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 20,
	},
	banner: {
		height: "25%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	bannerImg: {
		resizeMode: "cover",
		width: "90%",
		height: "90%",
		borderRadius: 20,
	},
	form: {
		width: "100%",
		height: "70%",

		padding: 20,
	},
	wellcome: {
		fontSize: 24,
		fontWeight: "bold",
	},
	input: {
		width: "100%",
		backgroundColor: "#D4D7E3",
		height: 42,
		borderRadius: 8,
		padding: 10,
	},
});
