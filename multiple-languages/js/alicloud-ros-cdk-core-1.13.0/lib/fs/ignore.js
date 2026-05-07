"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerIgnoreStrategy = exports.GitIgnoreStrategy = exports.GlobIgnoreStrategy = exports.IgnoreStrategy = void 0;
const path = require("path");
const dockerignore_1 = require("@balena/dockerignore");
const ignore_1 = require("ignore");
const options_1 = require("./options");
// Must be a 'require' to not run afoul of ESM module import rules
// eslint-disable-next-line @typescript-eslint/no-require-imports
const minimatch = require('minimatch');
/**
 * Represents file path ignoring behavior.
 */
class IgnoreStrategy {
    /**
     * Ignores file paths based on simple glob patterns.
     *
     * @returns `GlobIgnorePattern` associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered
     * @param patterns
     */
    static glob(absoluteRootPath, patterns) {
        return new GlobIgnoreStrategy(absoluteRootPath, patterns);
    }
    /**
     * Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).
     *
     * @returns `GitIgnorePattern` associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered
     * @param patterns
     */
    static git(absoluteRootPath, patterns) {
        return new GitIgnoreStrategy(absoluteRootPath, patterns);
    }
    /**
     * Ignores file paths based on the [`.dockerignore specification`](https://docs.docker.com/engine/reference/builder/#dockerignore-file).
     *
     * @returns `DockerIgnorePattern` associated with the given patterns.
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered
     * @param patterns
     */
    static docker(absoluteRootPath, patterns) {
        return new DockerIgnoreStrategy(absoluteRootPath, patterns);
    }
    /**
     * Creates an IgnoreStrategy based on the `ignoreMode` and `exclude` in a `CopyOptions`.
     *
     * @returns `IgnoreStrategy` based on the `CopyOptions`
     * @param absoluteRootPath the absolute path to the root directory of the paths to be considered
     * @param options the `CopyOptions` to create the `IgnoreStrategy` from
     */
    static fromCopyOptions(options, absoluteRootPath) {
        const ignoreMode = options.ignoreMode || options_1.IgnoreMode.GLOB;
        const exclude = options.exclude || [];
        switch (ignoreMode) {
            case options_1.IgnoreMode.GLOB:
                return this.glob(absoluteRootPath, exclude);
            case options_1.IgnoreMode.GIT:
                return this.git(absoluteRootPath, exclude);
            case options_1.IgnoreMode.DOCKER:
                return this.docker(absoluteRootPath, exclude);
        }
    }
}
exports.IgnoreStrategy = IgnoreStrategy;
/**
 * Ignores file paths based on simple glob patterns.
 */
class GlobIgnoreStrategy extends IgnoreStrategy {
    constructor(absoluteRootPath, patterns) {
        super();
        if (!path.isAbsolute(absoluteRootPath)) {
            throw new Error('GlobIgnoreStrategy expects an absolute file path');
        }
        this.absoluteRootPath = absoluteRootPath;
        this.patterns = patterns;
    }
    /**
     * Adds another pattern.
     * @params pattern the pattern to add
     */
    add(pattern) {
        this.patterns.push(pattern);
    }
    /**
     * Determines whether a given file path should be ignored or not.
     *
     * @param absoluteFilePath absolute file path to be assessed against the pattern
     * @returns `true` if the file should be ignored
     */
    ignores(absoluteFilePath) {
        if (!path.isAbsolute(absoluteFilePath)) {
            throw new Error('GlobIgnoreStrategy.ignores() expects an absolute path');
        }
        let relativePath = path.relative(this.absoluteRootPath, absoluteFilePath);
        let excludeOutput = false;
        for (const pattern of this.patterns) {
            const negate = pattern.startsWith('!');
            const match = minimatch(relativePath, pattern, { matchBase: true, flipNegate: true });
            if (!negate && match) {
                excludeOutput = true;
            }
            if (negate && match) {
                excludeOutput = false;
            }
        }
        return excludeOutput;
    }
}
exports.GlobIgnoreStrategy = GlobIgnoreStrategy;
/**
 * Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).
 */
class GitIgnoreStrategy extends IgnoreStrategy {
    constructor(absoluteRootPath, patterns) {
        super();
        if (!path.isAbsolute(absoluteRootPath)) {
            throw new Error('GitIgnoreStrategy expects an absolute file path');
        }
        this.absoluteRootPath = absoluteRootPath;
        this.ignore = (0, ignore_1.default)().add(patterns);
    }
    /**
     * Adds another pattern.
     * @params pattern the pattern to add
     */
    add(pattern) {
        this.ignore.add(pattern);
    }
    /**
     * Determines whether a given file path should be ignored or not.
     *
     * @param absoluteFilePath absolute file path to be assessed against the pattern
     * @returns `true` if the file should be ignored
     */
    ignores(absoluteFilePath) {
        if (!path.isAbsolute(absoluteFilePath)) {
            throw new Error('GitIgnoreStrategy.ignores() expects an absolute path');
        }
        let relativePath = path.relative(this.absoluteRootPath, absoluteFilePath);
        return this.ignore.ignores(relativePath);
    }
}
exports.GitIgnoreStrategy = GitIgnoreStrategy;
/**
 * Ignores file paths based on the [`.dockerignore specification`](https://docs.docker.com/engine/reference/builder/#dockerignore-file).
 */
class DockerIgnoreStrategy extends IgnoreStrategy {
    constructor(absoluteRootPath, patterns) {
        super();
        if (!path.isAbsolute(absoluteRootPath)) {
            throw new Error('DockerIgnoreStrategy expects an absolute file path');
        }
        this.absoluteRootPath = absoluteRootPath;
        this.ignore = (0, dockerignore_1.default)().add(patterns);
    }
    /**
     * Adds another pattern.
     * @params pattern the pattern to add
     */
    add(pattern) {
        this.ignore.add(pattern);
    }
    /**
     * Determines whether a given file path should be ignored or not.
     *
     * @param absoluteFilePath absolute file path to be assessed against the pattern
     * @returns `true` if the file should be ignored
     */
    ignores(absoluteFilePath) {
        if (!path.isAbsolute(absoluteFilePath)) {
            throw new Error('DockerIgnoreStrategy.ignores() expects an absolute path');
        }
        let relativePath = path.relative(this.absoluteRootPath, absoluteFilePath);
        return this.ignore.ignores(relativePath);
    }
}
exports.DockerIgnoreStrategy = DockerIgnoreStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWdub3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWdub3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE2QjtBQUM3Qix1REFBbUU7QUFDbkUsbUNBQStDO0FBQy9DLHVDQUFvRDtBQUVwRCxrRUFBa0U7QUFDbEUsaUVBQWlFO0FBQ2pFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2Qzs7R0FFRztBQUNILE1BQXNCLGNBQWM7SUFDbEM7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBd0IsRUFBRSxRQUFrQjtRQUM3RCxPQUFPLElBQUksa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQXdCLEVBQUUsUUFBa0I7UUFDNUQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUF3QixFQUFFLFFBQWtCO1FBQy9ELE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFvQixFQUFFLGdCQUF3QjtRQUMxRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRXRDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssb0JBQVUsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7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SUFBSSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUF0Q0QsOENBc0NDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLGNBQWM7SUFJdEQsWUFBWSxnQkFBd0IsRUFBRSxRQUFrQjtRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSxzQkFBWSxHQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxHQUFHLENBQUMsT0FBZTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxPQUFPLENBQUMsZ0JBQXdCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUUxRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQXRDRCxvREFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGRvY2tlcklnbm9yZSwgKiBhcyBEb2NrZXJJZ25vcmUgZnJvbSAnQGJhbGVuYS9kb2NrZXJpZ25vcmUnO1xuaW1wb3J0IGdpdElnbm9yZSwgKiBhcyBHaXRJZ25vcmUgZnJvbSAnaWdub3JlJztcbmltcG9ydCB7IENvcHlPcHRpb25zLCBJZ25vcmVNb2RlIH0gZnJvbSAnLi9vcHRpb25zJztcblxuLy8gTXVzdCBiZSBhICdyZXF1aXJlJyB0byBub3QgcnVuIGFmb3VsIG9mIEVTTSBtb2R1bGUgaW1wb3J0IHJ1bGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgbWluaW1hdGNoID0gcmVxdWlyZSgnbWluaW1hdGNoJyk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBmaWxlIHBhdGggaWdub3JpbmcgYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJZ25vcmVTdHJhdGVneSB7XG4gIC8qKlxuICAgKiBJZ25vcmVzIGZpbGUgcGF0aHMgYmFzZWQgb24gc2ltcGxlIGdsb2IgcGF0dGVybnMuXG4gICAqXG4gICAqIEByZXR1cm5zIGBHbG9iSWdub3JlUGF0dGVybmAgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwYXR0ZXJucy5cbiAgICogQHBhcmFtIGFic29sdXRlUm9vdFBhdGggdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBwYXRocyB0byBiZSBjb25zaWRlcmVkXG4gICAqIEBwYXJhbSBwYXR0ZXJuc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnbG9iKGFic29sdXRlUm9vdFBhdGg6IHN0cmluZywgcGF0dGVybnM6IHN0cmluZ1tdKTogR2xvYklnbm9yZVN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IEdsb2JJZ25vcmVTdHJhdGVneShhYnNvbHV0ZVJvb3RQYXRoLCBwYXR0ZXJucyk7XG4gIH1cblxuICAvKipcbiAgICogSWdub3JlcyBmaWxlIHBhdGhzIGJhc2VkIG9uIHRoZSBbYC5naXRpZ25vcmUgc3BlY2lmaWNhdGlvbmBdKGh0dHBzOi8vZ2l0LXNjbS5jb20vZG9jcy9naXRpZ25vcmUpLlxuICAgKlxuICAgKiBAcmV0dXJucyBgR2l0SWdub3JlUGF0dGVybmAgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwYXR0ZXJucy5cbiAgICogQHBhcmFtIGFic29sdXRlUm9vdFBhdGggdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBwYXRocyB0byBiZSBjb25zaWRlcmVkXG4gICAqIEBwYXJhbSBwYXR0ZXJuc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnaXQoYWJzb2x1dGVSb290UGF0aDogc3RyaW5nLCBwYXR0ZXJuczogc3RyaW5nW10pOiBHaXRJZ25vcmVTdHJhdGVneSB7XG4gICAgcmV0dXJuIG5ldyBHaXRJZ25vcmVTdHJhdGVneShhYnNvbHV0ZVJvb3RQYXRoLCBwYXR0ZXJucyk7XG4gIH1cblxuICAvKipcbiAgICogSWdub3JlcyBmaWxlIHBhdGhzIGJhc2VkIG9uIHRoZSBbYC5kb2NrZXJpZ25vcmUgc3BlY2lmaWNhdGlvbmBdKGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2VuZ2luZS9yZWZlcmVuY2UvYnVpbGRlci8jZG9ja2VyaWdub3JlLWZpbGUpLlxuICAgKlxuICAgKiBAcmV0dXJucyBgRG9ja2VySWdub3JlUGF0dGVybmAgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwYXR0ZXJucy5cbiAgICogQHBhcmFtIGFic29sdXRlUm9vdFBhdGggdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBwYXRocyB0byBiZSBjb25zaWRlcmVkXG4gICAqIEBwYXJhbSBwYXR0ZXJuc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkb2NrZXIoYWJzb2x1dGVSb290UGF0aDogc3RyaW5nLCBwYXR0ZXJuczogc3RyaW5nW10pOiBEb2NrZXJJZ25vcmVTdHJhdGVneSB7XG4gICAgcmV0dXJuIG5ldyBEb2NrZXJJZ25vcmVTdHJhdGVneShhYnNvbHV0ZVJvb3RQYXRoLCBwYXR0ZXJucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBJZ25vcmVTdHJhdGVneSBiYXNlZCBvbiB0aGUgYGlnbm9yZU1vZGVgIGFuZCBgZXhjbHVkZWAgaW4gYSBgQ29weU9wdGlvbnNgLlxuICAgKlxuICAgKiBAcmV0dXJucyBgSWdub3JlU3RyYXRlZ3lgIGJhc2VkIG9uIHRoZSBgQ29weU9wdGlvbnNgXG4gICAqIEBwYXJhbSBhYnNvbHV0ZVJvb3RQYXRoIHRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgcGF0aHMgdG8gYmUgY29uc2lkZXJlZFxuICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgYENvcHlPcHRpb25zYCB0byBjcmVhdGUgdGhlIGBJZ25vcmVTdHJhdGVneWAgZnJvbVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tQ29weU9wdGlvbnMob3B0aW9uczogQ29weU9wdGlvbnMsIGFic29sdXRlUm9vdFBhdGg6IHN0cmluZyk6IElnbm9yZVN0cmF0ZWd5IHtcbiAgICBjb25zdCBpZ25vcmVNb2RlID0gb3B0aW9ucy5pZ25vcmVNb2RlIHx8IElnbm9yZU1vZGUuR0xPQjtcbiAgICBjb25zdCBleGNsdWRlID0gb3B0aW9ucy5leGNsdWRlIHx8IFtdO1xuXG4gICAgc3dpdGNoIChpZ25vcmVNb2RlKSB7XG4gICAgICBjYXNlIElnbm9yZU1vZGUuR0xPQjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYihhYnNvbHV0ZVJvb3RQYXRoLCBleGNsdWRlKTtcblxuICAgICAgY2FzZSBJZ25vcmVNb2RlLkdJVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2l0KGFic29sdXRlUm9vdFBhdGgsIGV4Y2x1ZGUpO1xuXG4gICAgICBjYXNlIElnbm9yZU1vZGUuRE9DS0VSOlxuICAgICAgICByZXR1cm4gdGhpcy5kb2NrZXIoYWJzb2x1dGVSb290UGF0aCwgZXhjbHVkZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW5vdGhlciBwYXR0ZXJuLlxuICAgKiBAcGFyYW1zIHBhdHRlcm4gdGhlIHBhdHRlcm4gdG8gYWRkXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYWRkKHBhdHRlcm46IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIGZpbGUgcGF0aCBzaG91bGQgYmUgaWdub3JlZCBvciBub3QuXG4gICAqXG4gICAqIEBwYXJhbSBhYnNvbHV0ZUZpbGVQYXRoIGFic29sdXRlIGZpbGUgcGF0aCB0byBiZSBhc3Nlc3NlZCBhZ2FpbnN0IHRoZSBwYXR0ZXJuXG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlsZSBzaG91bGQgYmUgaWdub3JlZFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGlnbm9yZXMoYWJzb2x1dGVGaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBJZ25vcmVzIGZpbGUgcGF0aHMgYmFzZWQgb24gc2ltcGxlIGdsb2IgcGF0dGVybnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iSWdub3JlU3RyYXRlZ3kgZXh0ZW5kcyBJZ25vcmVTdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYWJzb2x1dGVSb290UGF0aDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IHBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmcsIHBhdHRlcm5zOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShhYnNvbHV0ZVJvb3RQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHbG9iSWdub3JlU3RyYXRlZ3kgZXhwZWN0cyBhbiBhYnNvbHV0ZSBmaWxlIHBhdGgnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFic29sdXRlUm9vdFBhdGggPSBhYnNvbHV0ZVJvb3RQYXRoO1xuICAgIHRoaXMucGF0dGVybnMgPSBwYXR0ZXJucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFub3RoZXIgcGF0dGVybi5cbiAgICogQHBhcmFtcyBwYXR0ZXJuIHRoZSBwYXR0ZXJuIHRvIGFkZFxuICAgKi9cbiAgcHVibGljIGFkZChwYXR0ZXJuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhdHRlcm5zLnB1c2gocGF0dGVybik7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gZmlsZSBwYXRoIHNob3VsZCBiZSBpZ25vcmVkIG9yIG5vdC5cbiAgICpcbiAgICogQHBhcmFtIGFic29sdXRlRmlsZVBhdGggYWJzb2x1dGUgZmlsZSBwYXRoIHRvIGJlIGFzc2Vzc2VkIGFnYWluc3QgdGhlIHBhdHRlcm5cbiAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBmaWxlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqL1xuICBwdWJsaWMgaWdub3JlcyhhYnNvbHV0ZUZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShhYnNvbHV0ZUZpbGVQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHbG9iSWdub3JlU3RyYXRlZ3kuaWdub3JlcygpIGV4cGVjdHMgYW4gYWJzb2x1dGUgcGF0aCcpO1xuICAgIH1cblxuICAgIGxldCByZWxhdGl2ZVBhdGggPSBwYXRoLnJlbGF0aXZlKHRoaXMuYWJzb2x1dGVSb290UGF0aCwgYWJzb2x1dGVGaWxlUGF0aCk7XG4gICAgbGV0IGV4Y2x1ZGVPdXRwdXQgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiB0aGlzLnBhdHRlcm5zKSB7XG4gICAgICBjb25zdCBuZWdhdGUgPSBwYXR0ZXJuLnN0YXJ0c1dpdGgoJyEnKTtcbiAgICAgIGNvbnN0IG1hdGNoID0gbWluaW1hdGNoKHJlbGF0aXZlUGF0aCwgcGF0dGVybiwgeyBtYXRjaEJhc2U6IHRydWUsIGZsaXBOZWdhdGU6IHRydWUgfSk7XG5cbiAgICAgIGlmICghbmVnYXRlICYmIG1hdGNoKSB7XG4gICAgICAgIGV4Y2x1ZGVPdXRwdXQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlICYmIG1hdGNoKSB7XG4gICAgICAgIGV4Y2x1ZGVPdXRwdXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhjbHVkZU91dHB1dDtcbiAgfVxufVxuXG4vKipcbiAqIElnbm9yZXMgZmlsZSBwYXRocyBiYXNlZCBvbiB0aGUgW2AuZ2l0aWdub3JlIHNwZWNpZmljYXRpb25gXShodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0aWdub3JlKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdElnbm9yZVN0cmF0ZWd5IGV4dGVuZHMgSWdub3JlU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IGFic29sdXRlUm9vdFBhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBpZ25vcmU6IEdpdElnbm9yZS5JZ25vcmU7XG5cbiAgY29uc3RydWN0b3IoYWJzb2x1dGVSb290UGF0aDogc3RyaW5nLCBwYXR0ZXJuczogc3RyaW5nW10pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKCFwYXRoLmlzQWJzb2x1dGUoYWJzb2x1dGVSb290UGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR2l0SWdub3JlU3RyYXRlZ3kgZXhwZWN0cyBhbiBhYnNvbHV0ZSBmaWxlIHBhdGgnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFic29sdXRlUm9vdFBhdGggPSBhYnNvbHV0ZVJvb3RQYXRoO1xuICAgIHRoaXMuaWdub3JlID0gZ2l0SWdub3JlKCkuYWRkKHBhdHRlcm5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFub3RoZXIgcGF0dGVybi5cbiAgICogQHBhcmFtcyBwYXR0ZXJuIHRoZSBwYXR0ZXJuIHRvIGFkZFxuICAgKi9cbiAgcHVibGljIGFkZChwYXR0ZXJuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZS5hZGQocGF0dGVybik7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gZmlsZSBwYXRoIHNob3VsZCBiZSBpZ25vcmVkIG9yIG5vdC5cbiAgICpcbiAgICogQHBhcmFtIGFic29sdXRlRmlsZVBhdGggYWJzb2x1dGUgZmlsZSBwYXRoIHRvIGJlIGFzc2Vzc2VkIGFnYWluc3QgdGhlIHBhdHRlcm5cbiAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBmaWxlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqL1xuICBwdWJsaWMgaWdub3JlcyhhYnNvbHV0ZUZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShhYnNvbHV0ZUZpbGVQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHaXRJZ25vcmVTdHJhdGVneS5pZ25vcmVzKCkgZXhwZWN0cyBhbiBhYnNvbHV0ZSBwYXRoJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUodGhpcy5hYnNvbHV0ZVJvb3RQYXRoLCBhYnNvbHV0ZUZpbGVQYXRoKTtcblxuICAgIHJldHVybiB0aGlzLmlnbm9yZS5pZ25vcmVzKHJlbGF0aXZlUGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBJZ25vcmVzIGZpbGUgcGF0aHMgYmFzZWQgb24gdGhlIFtgLmRvY2tlcmlnbm9yZSBzcGVjaWZpY2F0aW9uYF0oaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9idWlsZGVyLyNkb2NrZXJpZ25vcmUtZmlsZSkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NrZXJJZ25vcmVTdHJhdGVneSBleHRlbmRzIElnbm9yZVN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgaWdub3JlOiBEb2NrZXJJZ25vcmUuSWdub3JlO1xuXG4gIGNvbnN0cnVjdG9yKGFic29sdXRlUm9vdFBhdGg6IHN0cmluZywgcGF0dGVybnM6IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICghcGF0aC5pc0Fic29sdXRlKGFic29sdXRlUm9vdFBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvY2tlcklnbm9yZVN0cmF0ZWd5IGV4cGVjdHMgYW4gYWJzb2x1dGUgZmlsZSBwYXRoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hYnNvbHV0ZVJvb3RQYXRoID0gYWJzb2x1dGVSb290UGF0aDtcbiAgICB0aGlzLmlnbm9yZSA9IGRvY2tlcklnbm9yZSgpLmFkZChwYXR0ZXJucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbm90aGVyIHBhdHRlcm4uXG4gICAqIEBwYXJhbXMgcGF0dGVybiB0aGUgcGF0dGVybiB0byBhZGRcbiAgICovXG4gIHB1YmxpYyBhZGQocGF0dGVybjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmUuYWRkKHBhdHRlcm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIGZpbGUgcGF0aCBzaG91bGQgYmUgaWdub3JlZCBvciBub3QuXG4gICAqXG4gICAqIEBwYXJhbSBhYnNvbHV0ZUZpbGVQYXRoIGFic29sdXRlIGZpbGUgcGF0aCB0byBiZSBhc3Nlc3NlZCBhZ2FpbnN0IHRoZSBwYXR0ZXJuXG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlsZSBzaG91bGQgYmUgaWdub3JlZFxuICAgKi9cbiAgcHVibGljIGlnbm9yZXMoYWJzb2x1dGVGaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFwYXRoLmlzQWJzb2x1dGUoYWJzb2x1dGVGaWxlUGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9ja2VySWdub3JlU3RyYXRlZ3kuaWdub3JlcygpIGV4cGVjdHMgYW4gYWJzb2x1dGUgcGF0aCcpO1xuICAgIH1cblxuICAgIGxldCByZWxhdGl2ZVBhdGggPSBwYXRoLnJlbGF0aXZlKHRoaXMuYWJzb2x1dGVSb290UGF0aCwgYWJzb2x1dGVGaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gdGhpcy5pZ25vcmUuaWdub3JlcyhyZWxhdGl2ZVBhdGgpO1xuICB9XG59XG4iXX0=