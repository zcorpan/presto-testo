// hex (non-normative)
shouldBe("0x0", "0");
shouldBe("0xF", "15");
shouldBe("0xFF", "255");

// octal (non-normative)
shouldBe("01", "1");
shouldBe("010", "8");
shouldBe("09", "9");
shouldBe("019", "19");
