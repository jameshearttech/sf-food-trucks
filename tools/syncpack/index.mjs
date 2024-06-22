export default {
    filter: '.',
    indent: '  ',
    dependencyTypes: [
        'dev',
        'prod',
        'peer',
        'resolutions',
        'overrides',
        'pnpmOverrides',
        'local' // The workspace dependency type was renamed to local in syncpack 11.2.1.
    ],
    semverGroups: [
        {
            range: '',
            dependencyTypes: ['prod', 'resolutions', 'overrides', 'pnpmOverrides', 'local'],
            dependencies: ['**'],
            packages: ['**']
        },
        {
            range: '~',
            dependencyTypes: ['dev'],
            dependencies: ['**'],
            packages: ['**']
        },
        {
            range: '^',
            dependencyTypes: ['peer'],
            dependencies: ['**'],
            packages: ['**']
        }
    ],
    semverRange: '^',
    sortAz: ['dependencies', 'devDependencies', 'peerDependencies'],
    sortFirst: [
        'name',
        'version',
        'publishConfig',
        'private',
        'keywords',
        'description',
        'author',
        'license',
        'repository',
        'homepage',
        'bugs',
        'scripts',
        'type',
        'main',
        'dependencies',
        'devDependencies',
        'peerDependencies'
    ],
    source: [],
    versionGroups: [
        {
            label: 'Use workspace protocol when developing local packages',
            dependencies: ['$LOCAL'],
            dependencyTypes: ['dev'],
            pinVersion: 'workspace:*'
        }
    ]
};
