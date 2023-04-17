import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

// IMPORTAÇÃO DE IMAGENS
import Topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={Topo} style={estilo.Topo} />
      <Text style={estilo.title}>Detalhe da cesta</Text>
      <View style={estilo.cesta}>
        <Text style={estilo.nomeDaCesta}>Cesta de Verduras</Text>
        <View style={estilo.fazenda}>
          <Image source={logo} style={estilo.logoFazenda} />
          <Text style={estilo.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

        <Text style={estilo.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Text>
        <Text style={estilo.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilo = StyleSheet.create({
  Topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nomeDaCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  logoFazenda: {
    width: 32,
    height: 32,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F58",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
