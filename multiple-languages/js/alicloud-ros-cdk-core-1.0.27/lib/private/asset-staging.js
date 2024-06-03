"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerExec = exports.AssetBundlingVolumeCopy = exports.AssetBundlingBindMount = void 0;
const child_process_1 = require("child_process");
const crypto = require("crypto");
const os = require("os");
const asset_staging_1 = require("../asset-staging");
class AssetBundlingBase {
    constructor(options) {
        this.options = options;
    }
    /**
     * Determines a useful default user if not given otherwise
     */
    determineUser() {
        let user;
        if (this.options.user) {
            user = this.options.user;
        }
        else {
            // Default to current user
            const userInfo = os.userInfo();
            user =
                userInfo.uid !== -1 // uid is -1 on Windows
                    ? `${userInfo.uid}:${userInfo.gid}`
                    : '1000:1000';
        }
        return user;
    }
}
/**
 * Bundles files with bind mount as copy method
 */
class AssetBundlingBindMount extends AssetBundlingBase {
    /**
     * Bundle files with bind mount as copy method
     */
    run() {
        this.options.image.run({
            command: this.options.command,
            user: this.determineUser(),
            environment: this.options.environment,
            entrypoint: this.options.entrypoint,
            workingDirectory: this.options.workingDirectory ?? asset_staging_1.AssetStaging.BUNDLING_INPUT_DIR,
            securityOpt: this.options.securityOpt ?? '',
            volumesFrom: this.options.volumesFrom,
            volumes: [
                {
                    hostPath: this.options.sourcePath,
                    containerPath: asset_staging_1.AssetStaging.BUNDLING_INPUT_DIR,
                },
                {
                    hostPath: this.options.bundleDir,
                    containerPath: asset_staging_1.AssetStaging.BUNDLING_OUTPUT_DIR,
                },
                ...(this.options.volumes ?? []),
            ],
            network: this.options.network,
        });
    }
}
exports.AssetBundlingBindMount = AssetBundlingBindMount;
/**
 * Provides a helper container for copying bundling related files to specific input and output volumes
 */
class AssetBundlingVolumeCopy extends AssetBundlingBase {
    constructor(options) {
        super(options);
        const copySuffix = crypto.randomBytes(12).toString('hex');
        this.inputVolumeName = `assetInput${copySuffix}`;
        this.outputVolumeName = `assetOutput${copySuffix}`;
        this.copyContainerName = `copyContainer${copySuffix}`;
    }
    /**
     * Creates volumes for asset input and output
     */
    prepareVolumes() {
        dockerExec(['volume', 'create', this.inputVolumeName]);
        dockerExec(['volume', 'create', this.outputVolumeName]);
    }
    /**
     * Removes volumes for asset input and output
     */
    cleanVolumes() {
        dockerExec(['volume', 'rm', this.inputVolumeName]);
        dockerExec(['volume', 'rm', this.outputVolumeName]);
    }
    /**
     * copy files from the host where this is executed into the input volume
     * @param sourcePath - path to folder where files should be copied from - without trailing slash
     */
    copyInputFrom(sourcePath) {
        dockerExec([
            'cp',
            `${sourcePath}/.`,
            `${this.copyContainerName}:${asset_staging_1.AssetStaging.BUNDLING_INPUT_DIR}`,
        ]);
    }
    /**
     * copy files from the output volume to the host where this is executed
     * @param outputPath - path to folder where files should be copied to - without trailing slash
     */
    copyOutputTo(outputPath) {
        dockerExec([
            'cp',
            `${this.copyContainerName}:${asset_staging_1.AssetStaging.BUNDLING_OUTPUT_DIR}/.`,
            outputPath,
        ]);
    }
    /**
     * removes the Docker helper container
     */
    cleanHelperContainer() {
        dockerExec(['rm', this.copyContainerName]);
    }
    /**
     * Bundle files with VOLUME_COPY method
     */
    run() {
        const user = this.determineUser();
        this.prepareVolumes();
        this.copyInputFrom(this.options.sourcePath);
        this.options.image.run({
            command: this.options.command,
            user: user,
            environment: this.options.environment,
            entrypoint: this.options.entrypoint,
            workingDirectory: this.options.workingDirectory ?? asset_staging_1.AssetStaging.BUNDLING_INPUT_DIR,
            securityOpt: this.options.securityOpt ?? '',
            volumes: this.options.volumes,
            volumesFrom: [
                this.copyContainerName,
                ...(this.options.volumesFrom ?? []),
            ],
        });
        this.copyOutputTo(this.options.bundleDir);
        this.cleanHelperContainer();
        this.cleanVolumes();
    }
}
exports.AssetBundlingVolumeCopy = AssetBundlingVolumeCopy;
function dockerExec(args, options) {
    const prog = process.env.CDK_DOCKER ?? 'docker';
    const proc = child_process_1.spawnSync(prog, args, options ?? {
        encoding: 'utf-8',
        stdio: [
            'ignore',
            process.stderr,
            'inherit',
        ],
    });
    if (proc.error) {
        throw proc.error;
    }
    if (proc.status !== 0) {
        const reason = proc.signal != null
            ? `signal ${proc.signal}`
            : `status ${proc.status}`;
        const command = [prog, ...args.map((arg) => /[^a-z0-9_-]/i.test(arg) ? JSON.stringify(arg) : arg)].join(' ');
        function prependLines(firstLine, text) {
            if (!text || text.length === 0) {
                return [];
            }
            const padding = ' '.repeat(firstLine.length);
            return text.toString('utf-8').split('\n').map((line, idx) => `${idx === 0 ? firstLine : padding}${line}`);
        }
        throw new Error([
            `${prog} exited with ${reason}`,
            ...prependLines('--> STDOUT:  ', proc.stdout) ?? [],
            ...prependLines('--> STDERR:  ', proc.stderr) ?? [],
            `--> Command: ${command}`,
        ].join('\n'));
    }
    return proc;
}
exports.dockerExec = dockerExec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtc3RhZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2V0LXN0YWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTREO0FBQzVELGlDQUFpQztBQUNqQyx5QkFBeUI7QUFDekIsb0RBQWdEO0FBaUJoRCxNQUFlLGlCQUFpQjtJQUU5QixZQUFZLE9BQTZCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7T0FFRztJQUNPLGFBQWE7UUFDckIsSUFBSSxJQUFZLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDMUI7YUFBTTtZQUNMLDBCQUEwQjtZQUMxQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsSUFBSTtnQkFDRixRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtvQkFDekMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO29CQUNuQyxDQUFDLENBQUMsV0FBVyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsaUJBQWlCO0lBQzNEOztPQUVHO0lBQ0ksR0FBRztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNuQyxnQkFBZ0IsRUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLDRCQUFZLENBQUMsa0JBQWtCO1lBQ2xFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDckMsT0FBTyxFQUFFO2dCQUNQO29CQUNFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQ2pDLGFBQWEsRUFBRSw0QkFBWSxDQUFDLGtCQUFrQjtpQkFDL0M7Z0JBQ0Q7b0JBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztvQkFDaEMsYUFBYSxFQUFFLDRCQUFZLENBQUMsbUJBQW1CO2lCQUNoRDtnQkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUE1QkQsd0RBNEJDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLHVCQUF3QixTQUFRLGlCQUFpQjtJQWM1RCxZQUFZLE9BQTZCO1FBQ3ZDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxVQUFVLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLFVBQVUsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNLLGNBQWM7UUFDcEIsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWTtRQUNsQixVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssYUFBYSxDQUFDLFVBQWtCO1FBQ3RDLFVBQVUsQ0FBQztZQUNULElBQUk7WUFDSixHQUFHLFVBQVUsSUFBSTtZQUNqQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSw0QkFBWSxDQUFDLGtCQUFrQixFQUFFO1NBQy9ELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxZQUFZLENBQUMsVUFBa0I7UUFDckMsVUFBVSxDQUFDO1lBQ1QsSUFBSTtZQUNKLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLDRCQUFZLENBQUMsbUJBQW1CLElBQUk7WUFDakUsVUFBVTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLG9CQUFvQjtRQUMxQixVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDN0IsSUFBSSxFQUFFLElBQUk7WUFDVixXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsZ0JBQWdCLEVBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSw0QkFBWSxDQUFDLGtCQUFrQjtZQUNsRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRTtZQUMzQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzdCLFdBQVcsRUFBRTtnQkFDWCxJQUFJLENBQUMsaUJBQWlCO2dCQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFoR0QsMERBZ0dDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQWMsRUFBRSxPQUEwQjtJQUNuRSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7SUFDaEQsTUFBTSxJQUFJLEdBQUcseUJBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sSUFBSTtRQUM1QyxRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUU7WUFDTCxRQUFRO1lBQ1IsT0FBTyxDQUFDLE1BQU07WUFDZCxTQUFTO1NBQ1Y7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbEI7SUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUNoQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pCLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdHLFNBQVMsWUFBWSxDQUFDLFNBQWlCLEVBQUUsSUFBaUM7WUFDeEUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVHLENBQUM7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDO1lBQ2QsR0FBRyxJQUFJLGdCQUFnQixNQUFNLEVBQUU7WUFDL0IsR0FBRyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFO1lBQ3BELEdBQUcsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRTtZQUNwRCxnQkFBZ0IsT0FBTyxFQUFFO1NBQzFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQXRDRCxnQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3blN5bmMsIFNwYXduU3luY09wdGlvbnMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICogYXMgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgQXNzZXRTdGFnaW5nIH0gZnJvbSAnLi4vYXNzZXQtc3RhZ2luZyc7XG5pbXBvcnQgeyBCdW5kbGluZ09wdGlvbnMgfSBmcm9tICcuLi9idW5kbGluZyc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgRG9ja2VyIGJhc2VkIGJ1bmRsaW5nIG9mIGFzc2V0c1xuICovXG5pbnRlcmZhY2UgQXNzZXRCdW5kbGluZ09wdGlvbnMgZXh0ZW5kcyBCdW5kbGluZ09wdGlvbnMge1xuICAvKipcbiAgICogUGF0aCB3aGVyZSB0aGUgc291cmNlIGZpbGVzIGFyZSBsb2NhdGVkXG4gICAqL1xuICByZWFkb25seSBzb3VyY2VQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYXRoIHdoZXJlIHRoZSBvdXRwdXQgZmlsZXMgc2hvdWxkIGJlIHN0b3JlZFxuICAgKi9cbiAgcmVhZG9ubHkgYnVuZGxlRGlyOiBzdHJpbmc7XG59XG5cbmFic3RyYWN0IGNsYXNzIEFzc2V0QnVuZGxpbmdCYXNlIHtcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IEFzc2V0QnVuZGxpbmdPcHRpb25zO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBc3NldEJ1bmRsaW5nT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgYSB1c2VmdWwgZGVmYXVsdCB1c2VyIGlmIG5vdCBnaXZlbiBvdGhlcndpc2VcbiAgICovXG4gIHByb3RlY3RlZCBkZXRlcm1pbmVVc2VyKCkge1xuICAgIGxldCB1c2VyOiBzdHJpbmc7XG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2VyKSB7XG4gICAgICB1c2VyID0gdGhpcy5vcHRpb25zLnVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB1c2VyXG4gICAgICBjb25zdCB1c2VySW5mbyA9IG9zLnVzZXJJbmZvKCk7XG4gICAgICB1c2VyID1cbiAgICAgICAgdXNlckluZm8udWlkICE9PSAtMSAvLyB1aWQgaXMgLTEgb24gV2luZG93c1xuICAgICAgICAgID8gYCR7dXNlckluZm8udWlkfToke3VzZXJJbmZvLmdpZH1gXG4gICAgICAgICAgOiAnMTAwMDoxMDAwJztcbiAgICB9XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBCdW5kbGVzIGZpbGVzIHdpdGggYmluZCBtb3VudCBhcyBjb3B5IG1ldGhvZFxuICovXG5leHBvcnQgY2xhc3MgQXNzZXRCdW5kbGluZ0JpbmRNb3VudCBleHRlbmRzIEFzc2V0QnVuZGxpbmdCYXNlIHtcbiAgLyoqXG4gICAqIEJ1bmRsZSBmaWxlcyB3aXRoIGJpbmQgbW91bnQgYXMgY29weSBtZXRob2RcbiAgICovXG4gIHB1YmxpYyBydW4oKSB7XG4gICAgdGhpcy5vcHRpb25zLmltYWdlLnJ1bih7XG4gICAgICBjb21tYW5kOiB0aGlzLm9wdGlvbnMuY29tbWFuZCxcbiAgICAgIHVzZXI6IHRoaXMuZGV0ZXJtaW5lVXNlcigpLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMub3B0aW9ucy5lbnZpcm9ubWVudCxcbiAgICAgIGVudHJ5cG9pbnQ6IHRoaXMub3B0aW9ucy5lbnRyeXBvaW50LFxuICAgICAgd29ya2luZ0RpcmVjdG9yeTpcbiAgICAgICAgdGhpcy5vcHRpb25zLndvcmtpbmdEaXJlY3RvcnkgPz8gQXNzZXRTdGFnaW5nLkJVTkRMSU5HX0lOUFVUX0RJUixcbiAgICAgIHNlY3VyaXR5T3B0OiB0aGlzLm9wdGlvbnMuc2VjdXJpdHlPcHQgPz8gJycsXG4gICAgICB2b2x1bWVzRnJvbTogdGhpcy5vcHRpb25zLnZvbHVtZXNGcm9tLFxuICAgICAgdm9sdW1lczogW1xuICAgICAgICB7XG4gICAgICAgICAgaG9zdFBhdGg6IHRoaXMub3B0aW9ucy5zb3VyY2VQYXRoLFxuICAgICAgICAgIGNvbnRhaW5lclBhdGg6IEFzc2V0U3RhZ2luZy5CVU5ETElOR19JTlBVVF9ESVIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBob3N0UGF0aDogdGhpcy5vcHRpb25zLmJ1bmRsZURpcixcbiAgICAgICAgICBjb250YWluZXJQYXRoOiBBc3NldFN0YWdpbmcuQlVORExJTkdfT1VUUFVUX0RJUixcbiAgICAgICAgfSxcbiAgICAgICAgLi4uKHRoaXMub3B0aW9ucy52b2x1bWVzID8/IFtdKSxcbiAgICAgIF0sXG4gICAgICBuZXR3b3JrOiB0aGlzLm9wdGlvbnMubmV0d29yayxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgaGVscGVyIGNvbnRhaW5lciBmb3IgY29weWluZyBidW5kbGluZyByZWxhdGVkIGZpbGVzIHRvIHNwZWNpZmljIGlucHV0IGFuZCBvdXRwdXQgdm9sdW1lc1xuICovXG5leHBvcnQgY2xhc3MgQXNzZXRCdW5kbGluZ1ZvbHVtZUNvcHkgZXh0ZW5kcyBBc3NldEJ1bmRsaW5nQmFzZSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBEb2NrZXIgdm9sdW1lIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGFzc2V0IGlucHV0XG4gICAqL1xuICBwcml2YXRlIGlucHV0Vm9sdW1lTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgRG9ja2VyIHZvbHVtZSB0aGF0IGlzIHVzZWQgZm9yIHRoZSBhc3NldCBvdXRwdXRcbiAgICovXG4gIHByaXZhdGUgb3V0cHV0Vm9sdW1lTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgRG9ja2VyIGhlbHBlciBjb250YWluZXIgdG8gY29weSBmaWxlcyBpbnRvIHRoZSB2b2x1bWVcbiAgICovXG4gIHB1YmxpYyBjb3B5Q29udGFpbmVyTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFzc2V0QnVuZGxpbmdPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgY29uc3QgY29weVN1ZmZpeCA9IGNyeXB0by5yYW5kb21CeXRlcygxMikudG9TdHJpbmcoJ2hleCcpO1xuICAgIHRoaXMuaW5wdXRWb2x1bWVOYW1lID0gYGFzc2V0SW5wdXQke2NvcHlTdWZmaXh9YDtcbiAgICB0aGlzLm91dHB1dFZvbHVtZU5hbWUgPSBgYXNzZXRPdXRwdXQke2NvcHlTdWZmaXh9YDtcbiAgICB0aGlzLmNvcHlDb250YWluZXJOYW1lID0gYGNvcHlDb250YWluZXIke2NvcHlTdWZmaXh9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHZvbHVtZXMgZm9yIGFzc2V0IGlucHV0IGFuZCBvdXRwdXRcbiAgICovXG4gIHByaXZhdGUgcHJlcGFyZVZvbHVtZXMoKSB7XG4gICAgZG9ja2VyRXhlYyhbJ3ZvbHVtZScsICdjcmVhdGUnLCB0aGlzLmlucHV0Vm9sdW1lTmFtZV0pO1xuICAgIGRvY2tlckV4ZWMoWyd2b2x1bWUnLCAnY3JlYXRlJywgdGhpcy5vdXRwdXRWb2x1bWVOYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB2b2x1bWVzIGZvciBhc3NldCBpbnB1dCBhbmQgb3V0cHV0XG4gICAqL1xuICBwcml2YXRlIGNsZWFuVm9sdW1lcygpIHtcbiAgICBkb2NrZXJFeGVjKFsndm9sdW1lJywgJ3JtJywgdGhpcy5pbnB1dFZvbHVtZU5hbWVdKTtcbiAgICBkb2NrZXJFeGVjKFsndm9sdW1lJywgJ3JtJywgdGhpcy5vdXRwdXRWb2x1bWVOYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogY29weSBmaWxlcyBmcm9tIHRoZSBob3N0IHdoZXJlIHRoaXMgaXMgZXhlY3V0ZWQgaW50byB0aGUgaW5wdXQgdm9sdW1lXG4gICAqIEBwYXJhbSBzb3VyY2VQYXRoIC0gcGF0aCB0byBmb2xkZXIgd2hlcmUgZmlsZXMgc2hvdWxkIGJlIGNvcGllZCBmcm9tIC0gd2l0aG91dCB0cmFpbGluZyBzbGFzaFxuICAgKi9cbiAgcHJpdmF0ZSBjb3B5SW5wdXRGcm9tKHNvdXJjZVBhdGg6IHN0cmluZykge1xuICAgIGRvY2tlckV4ZWMoW1xuICAgICAgJ2NwJyxcbiAgICAgIGAke3NvdXJjZVBhdGh9Ly5gLFxuICAgICAgYCR7dGhpcy5jb3B5Q29udGFpbmVyTmFtZX06JHtBc3NldFN0YWdpbmcuQlVORExJTkdfSU5QVVRfRElSfWAsXG4gICAgXSk7XG4gIH1cblxuICAvKipcbiAgICogY29weSBmaWxlcyBmcm9tIHRoZSBvdXRwdXQgdm9sdW1lIHRvIHRoZSBob3N0IHdoZXJlIHRoaXMgaXMgZXhlY3V0ZWRcbiAgICogQHBhcmFtIG91dHB1dFBhdGggLSBwYXRoIHRvIGZvbGRlciB3aGVyZSBmaWxlcyBzaG91bGQgYmUgY29waWVkIHRvIC0gd2l0aG91dCB0cmFpbGluZyBzbGFzaFxuICAgKi9cbiAgcHJpdmF0ZSBjb3B5T3V0cHV0VG8ob3V0cHV0UGF0aDogc3RyaW5nKSB7XG4gICAgZG9ja2VyRXhlYyhbXG4gICAgICAnY3AnLFxuICAgICAgYCR7dGhpcy5jb3B5Q29udGFpbmVyTmFtZX06JHtBc3NldFN0YWdpbmcuQlVORExJTkdfT1VUUFVUX0RJUn0vLmAsXG4gICAgICBvdXRwdXRQYXRoLFxuICAgIF0pO1xuICB9XG4gIFxuICAvKipcbiAgICogcmVtb3ZlcyB0aGUgRG9ja2VyIGhlbHBlciBjb250YWluZXJcbiAgICovXG4gIHByaXZhdGUgY2xlYW5IZWxwZXJDb250YWluZXIoKSB7XG4gICAgZG9ja2VyRXhlYyhbJ3JtJywgdGhpcy5jb3B5Q29udGFpbmVyTmFtZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1bmRsZSBmaWxlcyB3aXRoIFZPTFVNRV9DT1BZIG1ldGhvZFxuICAgKi9cbiAgcHVibGljIHJ1bigpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5kZXRlcm1pbmVVc2VyKCk7XG4gICAgdGhpcy5wcmVwYXJlVm9sdW1lcygpO1xuICAgIHRoaXMuY29weUlucHV0RnJvbSh0aGlzLm9wdGlvbnMuc291cmNlUGF0aCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuaW1hZ2UucnVuKHtcbiAgICAgIGNvbW1hbmQ6IHRoaXMub3B0aW9ucy5jb21tYW5kLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnQsXG4gICAgICBlbnRyeXBvaW50OiB0aGlzLm9wdGlvbnMuZW50cnlwb2ludCxcbiAgICAgIHdvcmtpbmdEaXJlY3Rvcnk6XG4gICAgICAgIHRoaXMub3B0aW9ucy53b3JraW5nRGlyZWN0b3J5ID8/IEFzc2V0U3RhZ2luZy5CVU5ETElOR19JTlBVVF9ESVIsXG4gICAgICBzZWN1cml0eU9wdDogdGhpcy5vcHRpb25zLnNlY3VyaXR5T3B0ID8/ICcnLFxuICAgICAgdm9sdW1lczogdGhpcy5vcHRpb25zLnZvbHVtZXMsXG4gICAgICB2b2x1bWVzRnJvbTogW1xuICAgICAgICB0aGlzLmNvcHlDb250YWluZXJOYW1lLFxuICAgICAgICAuLi4odGhpcy5vcHRpb25zLnZvbHVtZXNGcm9tID8/IFtdKSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvcHlPdXRwdXRUbyh0aGlzLm9wdGlvbnMuYnVuZGxlRGlyKTtcbiAgICB0aGlzLmNsZWFuSGVscGVyQ29udGFpbmVyKCk7XG4gICAgdGhpcy5jbGVhblZvbHVtZXMoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9ja2VyRXhlYyhhcmdzOiBzdHJpbmdbXSwgb3B0aW9ucz86IFNwYXduU3luY09wdGlvbnMpIHtcbiAgY29uc3QgcHJvZyA9IHByb2Nlc3MuZW52LkNES19ET0NLRVIgPz8gJ2RvY2tlcic7XG4gIGNvbnN0IHByb2MgPSBzcGF3blN5bmMocHJvZywgYXJncywgb3B0aW9ucyA/PyB7XG4gICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgc3RkaW86IFsgLy8gc2hvdyBEb2NrZXIgb3V0cHV0XG4gICAgICAnaWdub3JlJywgLy8gaWdub3JlIHN0ZGlvXG4gICAgICBwcm9jZXNzLnN0ZGVyciwgLy8gcmVkaXJlY3Qgc3Rkb3V0IHRvIHN0ZGVyclxuICAgICAgJ2luaGVyaXQnLCAvLyBpbmhlcml0IHN0ZGVyclxuICAgIF0sXG4gIH0pO1xuXG4gIGlmIChwcm9jLmVycm9yKSB7XG4gICAgdGhyb3cgcHJvYy5lcnJvcjtcbiAgfVxuXG4gIGlmIChwcm9jLnN0YXR1cyAhPT0gMCkge1xuICAgIGNvbnN0IHJlYXNvbiA9IHByb2Muc2lnbmFsICE9IG51bGxcbiAgICAgID8gYHNpZ25hbCAke3Byb2Muc2lnbmFsfWBcbiAgICAgIDogYHN0YXR1cyAke3Byb2Muc3RhdHVzfWA7XG4gICAgY29uc3QgY29tbWFuZCA9IFtwcm9nLCAuLi5hcmdzLm1hcCgoYXJnKSA9PiAvW15hLXowLTlfLV0vaS50ZXN0KGFyZykgPyBKU09OLnN0cmluZ2lmeShhcmcpIDogYXJnKV0uam9pbignICcpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZExpbmVzKGZpcnN0TGluZTogc3RyaW5nLCB0ZXh0OiBCdWZmZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmdbXSB7XG4gICAgICBpZiAoIXRleHQgfHwgdGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFkZGluZyA9ICcgJy5yZXBlYXQoZmlyc3RMaW5lLmxlbmd0aCk7XG4gICAgICByZXR1cm4gdGV4dC50b1N0cmluZygndXRmLTgnKS5zcGxpdCgnXFxuJykubWFwKChsaW5lLCBpZHgpID0+IGAke2lkeCA9PT0gMCA/IGZpcnN0TGluZSA6IHBhZGRpbmd9JHtsaW5lfWApO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihbXG4gICAgICBgJHtwcm9nfSBleGl0ZWQgd2l0aCAke3JlYXNvbn1gLFxuICAgICAgLi4ucHJlcGVuZExpbmVzKCctLT4gU1RET1VUOiAgJywgcHJvYy5zdGRvdXQgKSA/PyBbXSxcbiAgICAgIC4uLnByZXBlbmRMaW5lcygnLS0+IFNUREVSUjogICcsIHByb2Muc3RkZXJyICkgPz8gW10sXG4gICAgICBgLS0+IENvbW1hbmQ6ICR7Y29tbWFuZH1gLFxuICAgIF0uam9pbignXFxuJykpO1xuICB9XG5cbiAgcmV0dXJuIHByb2M7XG59XG4iXX0=