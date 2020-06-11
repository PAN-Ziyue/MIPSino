// Generated from src/grammar/mips.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class mipsLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly COMMENT = 79;
	public static readonly NEWLINE = 80;
	public static readonly IDEN = 81;
	public static readonly DIGIT = 82;
	public static readonly LETTER = 83;
	public static readonly WS = 84;
	public static readonly NUM = 85;
	public static readonly HEX_NUM = 86;
	public static readonly ALPHA = 87;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", 
		"T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", 
		"T__73", "T__74", "T__75", "T__76", "T__77", "COMMENT", "NEWLINE", "IDEN", 
		"DIGIT", "LETTER", "WS", "NUM", "HEX_NUM", "ALPHA",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.byte'", "'.half'", "'.word'", "'.data'", "'.text'", "'move'", 
		"','", "'bgt'", "'blt'", "'bge'", "'ble'", "'add'", "'addu'", "'and'", 
		"'sub'", "'subu'", "'or'", "'nor'", "'xor'", "'slt'", "'sll'", "'srl'", 
		"'sra'", "'addi'", "'addiu'", "'andi'", "'slti'", "'sltiu'", "'lui'", 
		"'ori'", "'xori'", "'lw'", "'('", "')'", "'lh'", "'lb'", "'sw'", "'sh'", 
		"'sb'", "'beq'", "'bne'", "'jalr'", "'jr'", "'j'", "'jal'", "':'", "'-'", 
		"'$zero'", "'$at'", "'$v0'", "'$v1'", "'$a0'", "'$a1'", "'$a2'", "'$a3'", 
		"'$t0'", "'$t1'", "'$t2'", "'$t3'", "'$t4'", "'$t5'", "'$t6'", "'$t7'", 
		"'$s0'", "'$s1'", "'$s2'", "'$s3'", "'$s4'", "'$s5'", "'$s6'", "'$s7'", 
		"'$t8'", "'$t9'", "'$gp'", "'$sp'", "'$fp'", "'$ra'", "'$0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "COMMENT", "NEWLINE", "IDEN", "DIGIT", "LETTER", 
		"WS", "NUM", "HEX_NUM", "ALPHA",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mipsLexer._LITERAL_NAMES, mipsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mipsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(mipsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "mips.g4"; }

	// @Override
	public get ruleNames(): string[] { return mipsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return mipsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return mipsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return mipsLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02Y\u0225\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*" +
		"\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x031\x031\x031\x031\x03" +
		"2\x032\x032\x032\x033\x033\x033\x033\x034\x034\x034\x034\x035\x035\x03" +
		"5\x035\x036\x036\x036\x036\x037\x037\x037\x037\x038\x038\x038\x038\x03" +
		"9\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03<\x03<\x03" +
		"<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
		"@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03C\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03" +
		"G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x03" +
		"J\x03J\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03" +
		"N\x03N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x07P\u01EF\nP\fP\x0EP\u01F2" +
		"\vP\x03P\x03P\x03P\x03P\x03Q\x06Q\u01F9\nQ\rQ\x0EQ\u01FA\x03R\x03R\x03" +
		"R\x07R\u0200\nR\fR\x0ER\u0203\vR\x03S\x03S\x03T\x03T\x03U\x06U\u020A\n" +
		"U\rU\x0EU\u020B\x03U\x03U\x03V\x03V\x03V\x07V\u0213\nV\fV\x0EV\u0216\v" +
		"V\x05V\u0218\nV\x03W\x03W\x03W\x06W\u021D\nW\rW\x0EW\u021E\x03X\x06X\u0222" +
		"\nX\rX\x0EX\u0223\x03\u01F0\x02\x02Y\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]" +
		"\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02" +
		";u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87" +
		"\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97" +
		"\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7" +
		"\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02Y\x03\x02\n\x04\x02\f\f\x0F\x0F" +
		"\x03\x022;\x05\x02C\\aac|\x04\x02\v\v\"\"\x03\x023;\x04\x02ZZzz\x05\x02" +
		"2;CHch\x04\x02C\\c|\x02\u022D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
		"\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
		"\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
		"\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
		"\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
		"\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
		"\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02" +
		"\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02" +
		"\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02" +
		"\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02" +
		"\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02" +
		"\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02" +
		"\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02" +
		"\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB\x03\x02\x02\x02" +
		"\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x03\xB1\x03\x02\x02\x02" +
		"\x05\xB7\x03\x02\x02\x02\x07\xBD\x03\x02\x02\x02\t\xC3\x03\x02\x02\x02" +
		"\v\xC9\x03\x02\x02\x02\r\xCF\x03\x02\x02\x02\x0F\xD4\x03\x02\x02\x02\x11" +
		"\xD6\x03\x02\x02\x02\x13\xDA\x03\x02\x02\x02\x15\xDE\x03\x02\x02\x02\x17" +
		"\xE2\x03\x02\x02\x02\x19\xE6\x03\x02\x02\x02\x1B\xEA\x03\x02\x02\x02\x1D" +
		"\xEF\x03\x02\x02\x02\x1F\xF3\x03\x02\x02\x02!\xF7\x03\x02\x02\x02#\xFC" +
		"\x03\x02\x02\x02%\xFF\x03\x02\x02\x02\'\u0103\x03\x02\x02\x02)\u0107\x03" +
		"\x02\x02\x02+\u010B\x03\x02\x02\x02-\u010F\x03\x02\x02\x02/\u0113\x03" +
		"\x02\x02\x021\u0117\x03\x02\x02\x023\u011C\x03\x02\x02\x025\u0122\x03" +
		"\x02\x02\x027\u0127\x03\x02\x02\x029\u012C\x03\x02\x02\x02;\u0132\x03" +
		"\x02\x02\x02=\u0136\x03\x02\x02\x02?\u013A\x03\x02\x02\x02A\u013F\x03" +
		"\x02\x02\x02C\u0142\x03\x02\x02\x02E\u0144\x03\x02\x02\x02G\u0146\x03" +
		"\x02\x02\x02I\u0149\x03\x02\x02\x02K\u014C\x03\x02\x02\x02M\u014F\x03" +
		"\x02\x02\x02O\u0152\x03\x02\x02\x02Q\u0155\x03\x02\x02\x02S\u0159\x03" +
		"\x02\x02\x02U\u015D\x03\x02\x02\x02W\u0162\x03\x02\x02\x02Y\u0165\x03" +
		"\x02\x02\x02[\u0167\x03\x02\x02\x02]\u016B\x03\x02\x02\x02_\u016D\x03" +
		"\x02\x02\x02a\u016F\x03\x02\x02\x02c\u0175\x03\x02\x02\x02e\u0179\x03" +
		"\x02\x02\x02g\u017D\x03\x02\x02\x02i\u0181\x03\x02\x02\x02k\u0185\x03" +
		"\x02\x02\x02m\u0189\x03\x02\x02\x02o\u018D\x03\x02\x02\x02q\u0191\x03" +
		"\x02\x02\x02s\u0195\x03\x02\x02\x02u\u0199\x03\x02\x02\x02w\u019D\x03" +
		"\x02\x02\x02y\u01A1\x03\x02\x02\x02{\u01A5\x03\x02\x02\x02}\u01A9\x03" +
		"\x02\x02\x02\x7F\u01AD\x03\x02\x02\x02\x81\u01B1\x03\x02\x02\x02\x83\u01B5" +
		"\x03\x02\x02\x02\x85\u01B9\x03\x02\x02\x02\x87\u01BD\x03\x02\x02\x02\x89" +
		"\u01C1\x03\x02\x02\x02\x8B\u01C5\x03\x02\x02\x02\x8D\u01C9\x03\x02\x02" +
		"\x02\x8F\u01CD\x03\x02\x02\x02\x91\u01D1\x03\x02\x02\x02\x93\u01D5\x03" +
		"\x02\x02\x02\x95\u01D9\x03\x02\x02\x02\x97\u01DD\x03\x02\x02\x02\x99\u01E1" +
		"\x03\x02\x02\x02\x9B\u01E5\x03\x02\x02\x02\x9D\u01E9\x03\x02\x02\x02\x9F" +
		"\u01EC\x03\x02\x02\x02\xA1\u01F8\x03\x02\x02\x02\xA3\u01FC\x03\x02\x02" +
		"\x02\xA5\u0204\x03\x02\x02\x02\xA7\u0206\x03\x02\x02\x02\xA9\u0209\x03" +
		"\x02\x02\x02\xAB\u0217\x03\x02\x02\x02\xAD\u0219\x03\x02\x02\x02\xAF\u0221" +
		"\x03\x02\x02\x02\xB1\xB2\x070\x02\x02\xB2\xB3\x07d\x02\x02\xB3\xB4\x07" +
		"{\x02\x02\xB4\xB5\x07v\x02\x02\xB5\xB6\x07g\x02\x02\xB6\x04\x03\x02\x02" +
		"\x02\xB7\xB8\x070\x02\x02\xB8\xB9\x07j\x02\x02\xB9\xBA\x07c\x02\x02\xBA" +
		"\xBB\x07n\x02\x02\xBB\xBC\x07h\x02\x02\xBC\x06\x03\x02\x02\x02\xBD\xBE" +
		"\x070\x02\x02\xBE\xBF\x07y\x02\x02\xBF\xC0\x07q\x02\x02\xC0\xC1\x07t\x02" +
		"\x02\xC1\xC2\x07f\x02\x02\xC2\b\x03\x02\x02\x02\xC3\xC4\x070\x02\x02\xC4" +
		"\xC5\x07f\x02\x02\xC5\xC6\x07c\x02\x02\xC6\xC7\x07v\x02\x02\xC7\xC8\x07" +
		"c\x02\x02\xC8\n\x03\x02\x02\x02\xC9\xCA\x070\x02\x02\xCA\xCB\x07v\x02" +
		"\x02\xCB\xCC\x07g\x02\x02\xCC\xCD\x07z\x02\x02\xCD\xCE\x07v\x02\x02\xCE" +
		"\f\x03\x02\x02\x02\xCF\xD0\x07o\x02\x02\xD0\xD1\x07q\x02\x02\xD1\xD2\x07" +
		"x\x02\x02\xD2\xD3\x07g\x02\x02\xD3\x0E\x03\x02\x02\x02\xD4\xD5\x07.\x02" +
		"\x02\xD5\x10\x03\x02\x02\x02\xD6\xD7\x07d\x02\x02\xD7\xD8\x07i\x02\x02" +
		"\xD8\xD9\x07v\x02\x02\xD9\x12\x03\x02\x02\x02\xDA\xDB\x07d\x02\x02\xDB" +
		"\xDC\x07n\x02\x02\xDC\xDD\x07v\x02\x02\xDD\x14\x03\x02\x02\x02\xDE\xDF" +
		"\x07d\x02\x02\xDF\xE0\x07i\x02\x02\xE0\xE1\x07g\x02\x02\xE1\x16\x03\x02" +
		"\x02\x02\xE2\xE3\x07d\x02\x02\xE3\xE4\x07n\x02\x02\xE4\xE5\x07g\x02\x02" +
		"\xE5\x18\x03\x02\x02\x02\xE6\xE7\x07c\x02\x02\xE7\xE8\x07f\x02\x02\xE8" +
		"\xE9\x07f\x02\x02\xE9\x1A\x03\x02\x02\x02\xEA\xEB\x07c\x02\x02\xEB\xEC" +
		"\x07f\x02\x02\xEC\xED\x07f\x02\x02\xED\xEE\x07w\x02\x02\xEE\x1C\x03\x02" +
		"\x02\x02\xEF\xF0\x07c\x02\x02\xF0\xF1\x07p\x02\x02\xF1\xF2\x07f\x02\x02" +
		"\xF2\x1E\x03\x02\x02\x02\xF3\xF4\x07u\x02\x02\xF4\xF5\x07w\x02\x02\xF5" +
		"\xF6\x07d\x02\x02\xF6 \x03\x02\x02\x02\xF7\xF8\x07u\x02\x02\xF8\xF9\x07" +
		"w\x02\x02\xF9\xFA\x07d\x02\x02\xFA\xFB\x07w\x02\x02\xFB\"\x03\x02\x02" +
		"\x02\xFC\xFD\x07q\x02\x02\xFD\xFE\x07t\x02\x02\xFE$\x03\x02\x02\x02\xFF" +
		"\u0100\x07p\x02\x02\u0100\u0101\x07q\x02\x02\u0101\u0102\x07t\x02\x02" +
		"\u0102&\x03\x02\x02\x02\u0103\u0104\x07z\x02\x02\u0104\u0105\x07q\x02" +
		"\x02\u0105\u0106\x07t\x02\x02\u0106(\x03\x02\x02\x02\u0107\u0108\x07u" +
		"\x02\x02\u0108\u0109\x07n\x02\x02\u0109\u010A\x07v\x02\x02\u010A*\x03" +
		"\x02\x02\x02\u010B\u010C\x07u\x02\x02\u010C\u010D\x07n\x02\x02\u010D\u010E" +
		"\x07n\x02\x02\u010E,\x03\x02\x02\x02\u010F\u0110\x07u\x02\x02\u0110\u0111" +
		"\x07t\x02\x02\u0111\u0112\x07n\x02\x02\u0112.\x03\x02\x02\x02\u0113\u0114" +
		"\x07u\x02\x02\u0114\u0115\x07t\x02\x02\u0115\u0116\x07c\x02\x02\u0116" +
		"0\x03\x02\x02\x02\u0117\u0118\x07c\x02\x02\u0118\u0119\x07f\x02\x02\u0119" +
		"\u011A\x07f\x02\x02\u011A\u011B\x07k\x02\x02\u011B2\x03\x02\x02\x02\u011C" +
		"\u011D\x07c\x02\x02\u011D\u011E\x07f\x02\x02\u011E\u011F\x07f\x02\x02" +
		"\u011F\u0120\x07k\x02\x02\u0120\u0121\x07w\x02\x02\u01214\x03\x02\x02" +
		"\x02\u0122\u0123\x07c\x02\x02\u0123\u0124\x07p\x02\x02\u0124\u0125\x07" +
		"f\x02\x02\u0125\u0126\x07k\x02\x02\u01266\x03\x02\x02\x02\u0127\u0128" +
		"\x07u\x02\x02\u0128\u0129\x07n\x02\x02\u0129\u012A\x07v\x02\x02\u012A" +
		"\u012B\x07k\x02\x02\u012B8\x03\x02\x02\x02\u012C\u012D\x07u\x02\x02\u012D" +
		"\u012E\x07n\x02\x02\u012E\u012F\x07v\x02\x02\u012F\u0130\x07k\x02\x02" +
		"\u0130\u0131\x07w\x02\x02\u0131:\x03\x02\x02\x02\u0132\u0133\x07n\x02" +
		"\x02\u0133\u0134\x07w\x02\x02\u0134\u0135\x07k\x02\x02\u0135<\x03\x02" +
		"\x02\x02\u0136\u0137\x07q\x02\x02\u0137\u0138\x07t\x02\x02\u0138\u0139" +
		"\x07k\x02\x02\u0139>\x03\x02\x02\x02\u013A\u013B\x07z\x02\x02\u013B\u013C" +
		"\x07q\x02\x02\u013C\u013D\x07t\x02\x02\u013D\u013E\x07k\x02\x02\u013E" +
		"@\x03\x02\x02\x02\u013F\u0140\x07n\x02\x02\u0140\u0141\x07y\x02\x02\u0141" +
		"B\x03\x02\x02\x02\u0142\u0143\x07*\x02\x02\u0143D\x03\x02\x02\x02\u0144" +
		"\u0145\x07+\x02\x02\u0145F\x03\x02\x02\x02\u0146\u0147\x07n\x02\x02\u0147" +
		"\u0148\x07j\x02\x02\u0148H\x03\x02\x02\x02\u0149\u014A\x07n\x02\x02\u014A" +
		"\u014B\x07d\x02\x02\u014BJ\x03\x02\x02\x02\u014C\u014D\x07u\x02\x02\u014D" +
		"\u014E\x07y\x02\x02\u014EL\x03\x02\x02\x02\u014F\u0150\x07u\x02\x02\u0150" +
		"\u0151\x07j\x02\x02\u0151N\x03\x02\x02\x02\u0152\u0153\x07u\x02\x02\u0153" +
		"\u0154\x07d\x02\x02\u0154P\x03\x02\x02\x02\u0155\u0156\x07d\x02\x02\u0156" +
		"\u0157\x07g\x02\x02\u0157\u0158\x07s\x02\x02\u0158R\x03\x02\x02\x02\u0159" +
		"\u015A\x07d\x02\x02\u015A\u015B\x07p\x02\x02\u015B\u015C\x07g\x02\x02" +
		"\u015CT\x03\x02\x02\x02\u015D\u015E\x07l\x02\x02\u015E\u015F\x07c\x02" +
		"\x02\u015F\u0160\x07n\x02\x02\u0160\u0161\x07t\x02\x02\u0161V\x03\x02" +
		"\x02\x02\u0162\u0163\x07l\x02\x02\u0163\u0164\x07t\x02\x02\u0164X\x03" +
		"\x02\x02\x02\u0165\u0166\x07l\x02\x02\u0166Z\x03\x02\x02\x02\u0167\u0168" +
		"\x07l\x02\x02\u0168\u0169\x07c\x02\x02\u0169\u016A\x07n\x02\x02\u016A" +
		"\\\x03\x02\x02\x02\u016B\u016C\x07<\x02\x02\u016C^\x03\x02\x02\x02\u016D" +
		"\u016E\x07/\x02\x02\u016E`\x03\x02\x02\x02\u016F\u0170\x07&\x02\x02\u0170" +
		"\u0171\x07|\x02\x02\u0171\u0172\x07g\x02\x02\u0172\u0173\x07t\x02\x02" +
		"\u0173\u0174\x07q\x02\x02\u0174b\x03\x02\x02\x02\u0175\u0176\x07&\x02" +
		"\x02\u0176\u0177\x07c\x02\x02\u0177\u0178\x07v\x02\x02\u0178d\x03\x02" +
		"\x02\x02\u0179\u017A\x07&\x02\x02\u017A\u017B\x07x\x02\x02\u017B\u017C" +
		"\x072\x02\x02\u017Cf\x03\x02\x02\x02\u017D\u017E\x07&\x02\x02\u017E\u017F" +
		"\x07x\x02\x02\u017F\u0180\x073\x02\x02\u0180h\x03\x02\x02\x02\u0181\u0182" +
		"\x07&\x02\x02\u0182\u0183\x07c\x02\x02\u0183\u0184\x072\x02\x02\u0184" +
		"j\x03\x02\x02\x02\u0185\u0186\x07&\x02\x02\u0186\u0187\x07c\x02\x02\u0187" +
		"\u0188\x073\x02\x02\u0188l\x03\x02\x02\x02\u0189\u018A\x07&\x02\x02\u018A" +
		"\u018B\x07c\x02\x02\u018B\u018C\x074\x02\x02\u018Cn\x03\x02\x02\x02\u018D" +
		"\u018E\x07&\x02\x02\u018E\u018F\x07c\x02\x02\u018F\u0190\x075\x02\x02" +
		"\u0190p\x03\x02\x02\x02\u0191\u0192\x07&\x02\x02\u0192\u0193\x07v\x02" +
		"\x02\u0193\u0194\x072\x02\x02\u0194r\x03\x02\x02\x02\u0195\u0196\x07&" +
		"\x02\x02\u0196\u0197\x07v\x02\x02\u0197\u0198\x073\x02\x02\u0198t\x03" +
		"\x02\x02\x02\u0199\u019A\x07&\x02\x02\u019A\u019B\x07v\x02\x02\u019B\u019C" +
		"\x074\x02\x02\u019Cv\x03\x02\x02\x02\u019D\u019E\x07&\x02\x02\u019E\u019F" +
		"\x07v\x02\x02\u019F\u01A0\x075\x02\x02\u01A0x\x03\x02\x02\x02\u01A1\u01A2" +
		"\x07&\x02\x02\u01A2\u01A3\x07v\x02\x02\u01A3\u01A4\x076\x02\x02\u01A4" +
		"z\x03\x02\x02\x02\u01A5\u01A6\x07&\x02\x02\u01A6\u01A7\x07v\x02\x02\u01A7" +
		"\u01A8\x077\x02\x02\u01A8|\x03\x02\x02\x02\u01A9\u01AA\x07&\x02\x02\u01AA" +
		"\u01AB\x07v\x02\x02\u01AB\u01AC\x078\x02\x02\u01AC~\x03\x02\x02\x02\u01AD" +
		"\u01AE\x07&\x02\x02\u01AE\u01AF\x07v\x02\x02\u01AF\u01B0\x079\x02\x02" +
		"\u01B0\x80\x03\x02\x02\x02\u01B1\u01B2\x07&\x02\x02\u01B2\u01B3\x07u\x02" +
		"\x02\u01B3\u01B4\x072\x02\x02\u01B4\x82\x03\x02\x02\x02\u01B5\u01B6\x07" +
		"&\x02\x02\u01B6\u01B7\x07u\x02\x02\u01B7\u01B8\x073\x02\x02\u01B8\x84" +
		"\x03\x02\x02\x02\u01B9\u01BA\x07&\x02\x02\u01BA\u01BB\x07u\x02\x02\u01BB" +
		"\u01BC\x074\x02\x02\u01BC\x86\x03\x02\x02\x02\u01BD\u01BE\x07&\x02\x02" +
		"\u01BE\u01BF\x07u\x02\x02\u01BF\u01C0\x075\x02\x02\u01C0\x88\x03\x02\x02" +
		"\x02\u01C1\u01C2\x07&\x02\x02\u01C2\u01C3\x07u\x02\x02\u01C3\u01C4\x07" +
		"6\x02\x02\u01C4\x8A\x03\x02\x02\x02\u01C5\u01C6\x07&\x02\x02\u01C6\u01C7" +
		"\x07u\x02\x02\u01C7\u01C8\x077\x02\x02\u01C8\x8C\x03\x02\x02\x02\u01C9" +
		"\u01CA\x07&\x02\x02\u01CA\u01CB\x07u\x02\x02\u01CB\u01CC\x078\x02\x02" +
		"\u01CC\x8E\x03\x02\x02\x02\u01CD\u01CE\x07&\x02\x02\u01CE\u01CF\x07u\x02" +
		"\x02\u01CF\u01D0\x079\x02\x02\u01D0\x90\x03\x02\x02\x02\u01D1\u01D2\x07" +
		"&\x02\x02\u01D2\u01D3\x07v\x02\x02\u01D3\u01D4\x07:\x02\x02\u01D4\x92" +
		"\x03\x02\x02\x02\u01D5\u01D6\x07&\x02\x02\u01D6\u01D7\x07v\x02\x02\u01D7" +
		"\u01D8\x07;\x02\x02\u01D8\x94\x03\x02\x02\x02\u01D9\u01DA\x07&\x02\x02" +
		"\u01DA\u01DB\x07i\x02\x02\u01DB\u01DC\x07r\x02\x02\u01DC\x96\x03\x02\x02" +
		"\x02\u01DD\u01DE\x07&\x02\x02\u01DE\u01DF\x07u\x02\x02\u01DF\u01E0\x07" +
		"r\x02\x02\u01E0\x98\x03\x02\x02\x02\u01E1\u01E2\x07&\x02\x02\u01E2\u01E3" +
		"\x07h\x02\x02\u01E3\u01E4\x07r\x02\x02\u01E4\x9A\x03\x02\x02\x02\u01E5" +
		"\u01E6\x07&\x02\x02\u01E6\u01E7\x07t\x02\x02\u01E7\u01E8\x07c\x02\x02" +
		"\u01E8\x9C\x03\x02\x02\x02\u01E9\u01EA\x07&\x02\x02\u01EA\u01EB\x072\x02" +
		"\x02\u01EB\x9E\x03\x02\x02\x02\u01EC\u01F0\x07%\x02\x02\u01ED\u01EF\v" +
		"\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0" +
		"\u01F1\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F3\x03\x02" +
		"\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x05\xA1Q\x02\u01F4\u01F5" +
		"\x03\x02\x02\x02\u01F5\u01F6\bP\x02\x02\u01F6\xA0\x03\x02\x02\x02\u01F7" +
		"\u01F9\t\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02" +
		"\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\xA2" +
		"\x03\x02\x02\x02\u01FC\u0201\x05\xA7T\x02\u01FD\u0200\x05\xA7T\x02\u01FE" +
		"\u0200\x05\xA5S\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02" +
		"\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202\xA4\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02" +
		"\u0204\u0205\t\x03\x02\x02\u0205\xA6\x03\x02\x02\x02\u0206\u0207\t\x04" +
		"\x02\x02\u0207\xA8\x03\x02\x02\x02\u0208\u020A\t\x05\x02\x02\u0209\u0208" +
		"\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02" +
		"\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\b" +
		"U\x02\x02\u020E\xAA\x03\x02\x02\x02\u020F\u0218\x072\x02\x02\u0210\u0214" +
		"\t\x06\x02\x02\u0211\u0213\t\x03\x02\x02\u0212\u0211\x03\x02\x02\x02\u0213" +
		"\u0216\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02" +
		"\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217" +
		"\u020F\x03\x02\x02\x02\u0217\u0210\x03\x02\x02\x02\u0218\xAC\x03\x02\x02" +
		"\x02\u0219\u021A\x072\x02\x02\u021A\u021C\t\x07\x02\x02\u021B\u021D\t" +
		"\b\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E" +
		"\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\xAE\x03\x02\x02" +
		"\x02\u0220\u0222\t\t\x02\x02\u0221\u0220\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224" +
		"\xB0\x03\x02\x02\x02\f\x02\u01F0\u01FA\u01FF\u0201\u020B\u0214\u0217\u021E" +
		"\u0223\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mipsLexer.__ATN) {
			mipsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mipsLexer._serializedATN));
		}

		return mipsLexer.__ATN;
	}

}

