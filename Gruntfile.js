module.exports = function(grunt) {
	grunt.initConfig({
		nugetpack: {
			simple: {
				options: {
					id: "NuGetPack.Simple",
					version: "1.0.0",
					authors: "Some author",
					description: "Description of my simple package."
				},

				src: [
					"lib/**/*.js",
					"readme.md"
				]
			},

			advanced: {
				options: {
					id: "NuGetPack.Advanced",
					version: "1.0.0",
					authors: "Author1,Author2,Author3",
					owners: "Owner1,Owner2,Owner3",
					description: "Description.",
					releaseNotes: "Release notes.",
					summary: "Summary.",
					language: "en-us",
					projectUrl: "http://www.moxiecode.com/",
					// icon: "content/logo-128x128.png",
					// iconUrl: "http://www.moxiecode.com/icon.png",
					license: "GPL-2.0-or-later",
					licenseUrl: "https://licenses.nuget.org/GPL-2.0-or-later",
					copyright: "Copyright",
					requireLicenseAcceptance: true,
					dependencies: [
						{id: "dependency1"},
						{id: "dependency2", version: "(1.0,)"},
						{id: "dependency3", version: "1.0"},
						{id: "dependency4", version: "(,1.0]"},
						{id: "dependency5", version: "(,1.0)"},
						{id: "dependency6", version: "[1.0]"},
						{id: "dependency7", version: "(1.0,)"},
						{id: "dependency8", version: "(1.0,2.0)"},
						{id: "dependency9", version: "[1.0,2.0]"},
						{id: "dependency10", version: "[1.9.1,4)"},
						{id: "dependency11", version: "2.0.1"}
					],
					tags: "tag1 tag2 tag3",
					excludes: ["test/**/*.nuspec"],
					outputDir: "."
				},

				files: [
					{src: "readme.md", dest: "/content/dir1/readme_now.md"},
					{src: "lib", dest: "/content/dir2/test_lib"},
					{src: "test", dest: "/content/dir2/test"}
				]
			}
		},

		clean: {
			packages: [
				"*.nupkg"
			]
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['clean', 'nugetpack']);
};
