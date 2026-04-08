"use client";

import { Button } from "@/components/shared/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Briefcase,
	CheckCircle,
	ChevronRight,
	Clock,
	Heart,
	Lightbulb,
	Mail,
	MapPin,
	RefreshCw,
	Search,
	Shield,
	Star,
	Target,
	Users,
	XCircle,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface JobRole {
	id: string;
	title: string;
	department: string;
	type: string;
	location: string;
	description: string;
	href: string;
}

// Job listings data - add/remove roles here
const jobListings: JobRole[] = [
	{
		id: "technical-presales-engineer",
		title: "Technical Presales Engineer",
		department: "Engineering & Presales",
		type: "Full-time",
		location: "Remote (Occasional Travel)",
		description:
			"Bridge the gap between client needs and technical delivery. Scope IT & cybersecurity solutions, lead technical discovery, and design proposals that solve real problems.",
		href: "/careers/technical-presales-engineer",
	},
	{
		id: "it-project-manager",
		title: "IT Project Manager (Mid-Level)",
		department: "Operations & PM",
		type: "Full-time",
		location: "Remote (Occasional Travel)",
		description:
			"Lead IT and cybersecurity projects from kick-off to completion. Manage timelines, client expectations, and cross-functional delivery across infrastructure, security, and compliance.",
		href: "/careers/it-project-manager",
	},
	{
		id: "sales-marketing-executive",
		title: "Sales & Marketing Executive",
		department: "Sales & Marketing",
		type: "Full-time",
		location: "Hybrid",
		description:
			"Drive new business opportunities through outreach, lead generation, and relationship building. Support marketing campaigns across LinkedIn, email, and events.",
		href: "/careers/sales-marketing-executive",
	},
	{
		id: "2nd-line-it-analyst",
		title: "2nd Line IT Analyst",
		department: "IT Operations",
		type: "Full-time",
		location: "Remote (Shift-based)",
		description:
			"Provide advanced technical support across Microsoft 365, Azure, networking, and endpoint management. Troubleshoot escalated issues and maintain client infrastructure.",
		href: "/careers/2nd-line-it-analyst",
	},
	{
		id: "l2-security-analyst",
		title: "L2 Security Analyst (Mid-Level)",
		department: "Cybersecurity",
		type: "Full-time",
		location: "Remote (Shift-based)",
		description:
			"Investigate and respond to security incidents, manage SIEM/EDR platforms, and support clients with threat detection, vulnerability management, and compliance.",
		href: "/careers/l2-security-analyst",
	},
];

const departments = [
	"All Departments",
	"Engineering & Presales",
	"Operations & PM",
	"Sales & Marketing",
	"IT Operations",
	"Cybersecurity",
];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract"];
const locations = [
	"All Locations",
	"Remote (Occasional Travel)",
	"Remote (Shift-based)",
	"Hybrid",
];

const CareersPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedDepartment, setSelectedDepartment] =
		useState("All Departments");
	const [selectedType, setSelectedType] = useState("All Types");
	const [selectedLocation, setSelectedLocation] = useState("All Locations");

	const filteredJobs = useMemo(() => {
		return jobListings.filter((job) => {
			const matchesSearch =
				searchQuery === "" ||
				job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				job.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesDepartment =
				selectedDepartment === "All Departments" ||
				job.department === selectedDepartment;
			const matchesType =
				selectedType === "All Types" || job.type === selectedType;
			const matchesLocation =
				selectedLocation === "All Locations" ||
				job.location === selectedLocation;
			return (
				matchesSearch && matchesDepartment && matchesType && matchesLocation
			);
		});
	}, [searchQuery, selectedDepartment, selectedType, selectedLocation]);
	const coreValues = [
		{
			letter: "C",
			title: "Change-Driven",
			description: "We are agile by design.",
			subtitle:
				"Technology, threats, and regulations evolve constantly. So do we.",
			details: [
				"We challenge outdated ways of working",
				"We adapt quickly and decisively",
				"We are not afraid to improve systems, processes, or ourselves",
			],
			tagline: "Change is not disruption here. It's how progress happens.",
			icon: RefreshCw,
			gradient: "from-blue-500 to-cyan-500",
		},
		{
			letter: "O",
			title: "Ownership",
			description: "Excellence starts with ownership.",
			subtitle: "Every team member is trusted to:",
			details: [
				"Take responsibility for their work",
				"Think beyond their job title",
				"Act in the best interest of the client and the team",
			],
			tagline:
				"We don't micromanage, but we do expect accountability. If something needs fixing, we fix it. If something can be improved, we improve it.",
			icon: Target,
			gradient: "from-primary to-blue-500",
		},
		{
			letter: "R",
			title: "Relationships",
			description: "Strong teams outperform clever individuals.",
			subtitle: "We place a high value on:",
			details: [
				"Respectful communication",
				"Collaboration across roles",
				"Supporting each other under pressure",
			],
			dontTolerate: [
				"Ego-driven behaviour",
				"Poor communication",
				"Undermining colleagues",
			],
			tagline:
				"Professional, calm, and constructive relationships are non-negotiable.",
			icon: Users,
			gradient: "from-cyan-500 to-primary",
		},
		{
			letter: "E",
			title: "Excellence",
			description: "Excellence is compulsory. Not optional. Not situational.",
			subtitle:
				"Whether it's supporting a user, designing a secure environment, writing documentation, or communicating with a client — the standard is the same.",
			details: [
				"Attention to detail",
				"Clear thinking",
				"High-quality outcomes",
				"Pride in your work",
			],
			tagline: "Good enough is not good enough here.",
			icon: Star,
			gradient: "from-purple-500 to-primary",
		},
	];

	const thriveTraits = [
		"Enjoy solving real problems",
		"Care deeply about quality and security",
		"Communicate clearly and professionally",
		"Take ownership of outcomes",
		"Respect your teammates",
	];

	const struggleTraits = [
		"Avoid responsibility",
		"Resist change",
		"Cut corners",
		"Prefer rigid, slow-moving environments",
	];

	const workplaceFeatures = [
		{ icon: Zap, text: "Fast-moving and challenging" },
		{ icon: Shield, text: "High trust, high responsibility" },
		{ icon: Target, text: "Clear expectations and standards" },
		{ icon: Lightbulb, text: "Space to grow, learn, and improve" },
		{ icon: XCircle, text: "Zero tolerance for complacency" },
	];

	const commitments = [
		"Meaningful work with real impact",
		"A team that values trust and respect",
		"Opportunities to grow technically and professionally",
		"A culture where standards are clear and enforced",
	];

	return (
		<div className="space-y-0">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
				{/* Background */}
				<div className="absolute inset-0 -top-20 bg-gradient-to-br from-dark via-secondary to-dark">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#16365f15_1px,transparent_1px),linear-gradient(to_bottom,#16365f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

					<motion.div
						animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
						className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
					/>
					<motion.div
						animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2,
						}}
						className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-30 pb-20">
					<div className="text-center space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="flex justify-center">
							<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-primary">
								<Heart className="w-5 h-5" />
								<span className="font-semibold text-sm">
									Careers at Core Innovate
								</span>
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-dm-sans text-white leading-[1.1] px-4">
							<span className="block mb-3 sm:mb-4">Build Work That</span>
							<span className="block bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
								Matters
							</span>
							<span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80">
								With People Who Care
							</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="max-w-3xl mx-auto space-y-6 px-4">
							<p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed">
								At Core Innovate, we don&apos;t hire to fill seats. We hire
								people who want to build, improve, and take ownership.
							</p>
							<p className="text-white/70 text-base sm:text-lg leading-relaxed">
								We operate in fast-moving IT, cybersecurity, and compliance
								environments. That means change is constant and we embrace it.
							</p>
							<p className="text-primary font-semibold text-lg sm:text-xl">
								If you value clarity, accountability, and doing things properly,
								you&apos;ll fit in well here.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="pt-8">
							<Link href="#open-roles">
								<Button
									size="lg"
									className="shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
									View Open Roles
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</Link>
						</motion.div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
			</section>

			{/* What CORE Means Section */}
			<section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-slate-50">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
							What <span className="text-primary">CORE</span> Means to Us
						</h2>
						<p className="text-lg text-tertiary max-w-2xl mx-auto">
							CORE is not just our name. It defines how we work, how we think,
							and how we treat each other.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8">
						{coreValues.map((value, index) => (
							<motion.div
								key={value.letter}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group">
								<div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
									<div
										className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
									/>

									<div className="relative">
										<div className="flex items-center gap-4 mb-6">
											<div
												className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
												<span className="text-3xl font-bold text-white">
													{value.letter}
												</span>
											</div>
											<div>
												<h3 className="text-2xl font-bold text-secondary font-dm-sans">
													{value.title}
												</h3>
												<p className="text-tertiary">{value.description}</p>
											</div>
										</div>

										{value.subtitle && (
											<p className="text-grey mb-4">{value.subtitle}</p>
										)}

										<div className="space-y-3 mb-6">
											{value.details.map((detail, i) => (
												<div key={i} className="flex items-start gap-3">
													<CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
													<span className="text-grey">{detail}</span>
												</div>
											))}
										</div>

										{value.dontTolerate && (
											<div className="mb-6 bg-red-50 rounded-xl p-4 border border-red-100">
												<p className="text-sm font-semibold text-red-800 mb-3">
													We don&apos;t tolerate:
												</p>
												<div className="space-y-2">
													{value.dontTolerate.map((item: string, i: number) => (
														<div key={i} className="flex items-center gap-2">
															<XCircle className="w-4 h-4 text-red-400 shrink-0" />
															<span className="text-sm text-red-700">
																{item}
															</span>
														</div>
													))}
												</div>
											</div>
										)}

										<p className="text-primary font-semibold italic border-l-4 border-primary pl-4">
											{value.tagline}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* What It's Like Section */}
			<section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-dark via-secondary to-dark relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
				<div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-dm-sans">
							What It&apos;s Like to Work Here
						</h2>
					</motion.div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
						{workplaceFeatures.map((feature, index) => (
							<motion.div
								key={feature.text}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center">
								<feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
								<p className="text-white/90 font-medium">{feature.text}</p>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-center text-white/80 text-lg">
						You&apos;ll be supported, but you&apos;ll also be stretched.
					</motion.p>
				</div>
			</section>

			{/* Who Thrives / Who Struggles Section */}
			<section className="py-20 px-4 sm:px-8 lg:px-12 bg-slate-50">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
							Who Thrives at Core Innovate
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{/* Thrives */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
									<CheckCircle className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-secondary font-dm-sans">
									You&apos;ll do well here if you:
								</h3>
							</div>
							<div className="space-y-4">
								{thriveTraits.map((trait, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-green-500" />
										<span className="text-grey">{trait}</span>
									</div>
								))}
							</div>
						</motion.div>

						{/* Struggles */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
									<XCircle className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-secondary font-dm-sans">
									You may struggle here if you:
								</h3>
							</div>
							<div className="space-y-4">
								{struggleTraits.map((trait, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-red-500" />
										<span className="text-grey">{trait}</span>
									</div>
								))}
							</div>
							<p className="mt-6 text-tertiary italic">
								That&apos;s okay. We&apos;re not for everyone.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Commitment Section */}
			<section className="py-20 px-4 sm:px-8 lg:px-12 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}>
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 font-dm-sans">
								Our Commitment to You
							</h2>
							<p className="text-lg text-tertiary mb-8">In return, we offer:</p>
							<div className="space-y-4">
								{commitments.map((commitment, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.1 }}
										className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
										<div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
											<CheckCircle className="w-5 h-5 text-white" />
										</div>
										<span className="text-grey font-medium">{commitment}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl p-8 sm:p-12 border border-primary/20">
								<h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 font-dm-sans">
									Join Us
								</h3>
								<p className="text-grey mb-8 leading-relaxed">
									If you&apos;re looking for a place where standards are high,
									teamwork matters, and security and excellence are taken
									seriously, then Core Innovate may be the right place for you.
								</p>
								<Link href="/contact-us">
									<Button
										size="lg"
										className="w-full sm:w-auto shadow-lg hover:shadow-primary/30 transition-all">
										<Mail className="w-5 h-5 mr-2" />
										Get in Touch
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Open Roles Section */}
			<section
				id="open-roles"
				className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-dark via-secondary to-dark relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

				<div className="max-w-5xl mx-auto relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-dm-sans">
							Open Roles
						</h2>
						<p className="text-white/80 text-lg">
							We&apos;re always looking for talented individuals to join our
							team.
						</p>
					</motion.div>

					{/* Search & Filters */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
						{/* Search Bar */}
						<div className="relative mb-4">
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
							<input
								type="text"
								placeholder="Search roles by title or keyword..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-dm-sans"
							/>
						</div>

						{/* Filter Dropdowns */}
						<div className="grid sm:grid-cols-3 gap-3">
							{/* Department */}
							<div className="relative">
								<Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
								<select
									value={selectedDepartment}
									onChange={(e) => setSelectedDepartment(e.target.value)}
									className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 focus:outline-none focus:border-primary/50 transition-all font-dm-sans text-sm appearance-none cursor-pointer">
									{departments.map((dept) => (
										<option
											key={dept}
											value={dept}
											className="bg-slate-800 text-white">
											{dept}
										</option>
									))}
								</select>
								<ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
							</div>

							{/* Job Type */}
							<div className="relative">
								<Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
								<select
									value={selectedType}
									onChange={(e) => setSelectedType(e.target.value)}
									className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 focus:outline-none focus:border-primary/50 transition-all font-dm-sans text-sm appearance-none cursor-pointer">
									{jobTypes.map((type) => (
										<option
											key={type}
											value={type}
											className="bg-slate-800 text-white">
											{type}
										</option>
									))}
								</select>
								<ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
							</div>

							{/* Location */}
							<div className="relative">
								<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
								<select
									value={selectedLocation}
									onChange={(e) => setSelectedLocation(e.target.value)}
									className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 focus:outline-none focus:border-primary/50 transition-all font-dm-sans text-sm appearance-none cursor-pointer">
									{locations.map((loc) => (
										<option
											key={loc}
											value={loc}
											className="bg-slate-800 text-white">
											{loc}
										</option>
									))}
								</select>
								<ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 rotate-90 pointer-events-none" />
							</div>
						</div>
					</motion.div>

					{/* Job Listings */}
					{filteredJobs.length > 0 ? (
						<div className="space-y-4">
							{filteredJobs.map((job, index) => (
								<motion.div
									key={job.id}
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.05 }}>
									<Link
										href={job.href}
										className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300">
										<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
											<div>
												<h3 className="text-xl font-bold text-white font-dm-sans group-hover:text-primary transition-colors mb-2">
													{job.title}
												</h3>
												<p className="text-white/60 text-sm mb-3">
													{job.description}
												</p>
												<div className="flex flex-wrap gap-3">
													<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
														<Briefcase className="w-3 h-3" />
														{job.department}
													</span>
													<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
														<Clock className="w-3 h-3" />
														{job.type}
													</span>
													<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
														<MapPin className="w-3 h-3" />
														{job.location}
													</span>
												</div>
											</div>
											<div className="flex-shrink-0">
												<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
													<ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
												</div>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</div>
					) : (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center">
							<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
								<div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Users className="w-10 h-10 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-white mb-4 font-dm-sans">
									{jobListings.length === 0
										? "No Open Positions Right Now"
										: "No Matching Roles Found"}
								</h3>
								<p className="text-white/70 mb-8 max-w-lg mx-auto">
									{jobListings.length === 0
										? "We don't have any open roles at the moment, but we're always interested in hearing from exceptional people. Send us your CV and tell us why you'd be a great fit."
										: "Try adjusting your filters or search terms. You can also send us your CV directly."}
								</p>
								<Link href="/contact-us">
									<Button size="lg" variant="white" className="shadow-lg">
										<Mail className="w-5 h-5 mr-2" />
										Send Your CV
									</Button>
								</Link>
							</div>
						</motion.div>
					)}
				</div>
			</section>

			{/* Footer Note */}
			<section className="py-8 px-4 bg-slate-900">
				<div className="max-w-7xl mx-auto text-center">
					<p className="text-white/60 text-sm">
						Core Innovate is an equal opportunity employer. We hire based on
						capability, mindset, and values.
					</p>
				</div>
			</section>
		</div>
	);
};

export default CareersPage;
