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
        this.ignore = ignore_1.default().add(patterns);
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
        this.ignore = dockerignore_1.default().add(patterns);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWdub3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWdub3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE2QjtBQUM3Qix1REFBbUU7QUFDbkUsbUNBQStDO0FBQy9DLHVDQUFvRDtBQUVwRCxrRUFBa0U7QUFDbEUsaUVBQWlFO0FBQ2pFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2Qzs7R0FFRztBQUNILE1BQXNCLGNBQWM7SUFDbEM7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBd0IsRUFBRSxRQUFrQjtRQUM3RCxPQUFPLElBQUksa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQXdCLEVBQUUsUUFBa0I7UUFDNUQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUF3QixFQUFFLFFBQWtCO1FBQy9ELE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFvQixFQUFFLGdCQUF3QjtRQUMxRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3pELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRXRDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssb0JBQVUsQ0FBQyxJQUFJO2dCQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7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Q0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBdENELDhDQXNDQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxjQUFjO0lBSXRELFlBQVksZ0JBQXdCLEVBQUUsUUFBa0I7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEdBQUcsQ0FBQyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBQyxnQkFBd0I7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDNUU7UUFFRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBdENELG9EQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZG9ja2VySWdub3JlLCAqIGFzIERvY2tlcklnbm9yZSBmcm9tICdAYmFsZW5hL2RvY2tlcmlnbm9yZSc7XG5pbXBvcnQgZ2l0SWdub3JlLCAqIGFzIEdpdElnbm9yZSBmcm9tICdpZ25vcmUnO1xuaW1wb3J0IHsgQ29weU9wdGlvbnMsIElnbm9yZU1vZGUgfSBmcm9tICcuL29wdGlvbnMnO1xuXG4vLyBNdXN0IGJlIGEgJ3JlcXVpcmUnIHRvIG5vdCBydW4gYWZvdWwgb2YgRVNNIG1vZHVsZSBpbXBvcnQgcnVsZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBtaW5pbWF0Y2ggPSByZXF1aXJlKCdtaW5pbWF0Y2gnKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGZpbGUgcGF0aCBpZ25vcmluZyBiZWhhdmlvci5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElnbm9yZVN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIElnbm9yZXMgZmlsZSBwYXRocyBiYXNlZCBvbiBzaW1wbGUgZ2xvYiBwYXR0ZXJucy5cbiAgICpcbiAgICogQHJldHVybnMgYEdsb2JJZ25vcmVQYXR0ZXJuYCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHBhdHRlcm5zLlxuICAgKiBAcGFyYW0gYWJzb2x1dGVSb290UGF0aCB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIHBhdGhzIHRvIGJlIGNvbnNpZGVyZWRcbiAgICogQHBhcmFtIHBhdHRlcm5zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdsb2IoYWJzb2x1dGVSb290UGF0aDogc3RyaW5nLCBwYXR0ZXJuczogc3RyaW5nW10pOiBHbG9iSWdub3JlU3RyYXRlZ3kge1xuICAgIHJldHVybiBuZXcgR2xvYklnbm9yZVN0cmF0ZWd5KGFic29sdXRlUm9vdFBhdGgsIHBhdHRlcm5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZ25vcmVzIGZpbGUgcGF0aHMgYmFzZWQgb24gdGhlIFtgLmdpdGlnbm9yZSBzcGVjaWZpY2F0aW9uYF0oaHR0cHM6Ly9naXQtc2NtLmNvbS9kb2NzL2dpdGlnbm9yZSkuXG4gICAqXG4gICAqIEByZXR1cm5zIGBHaXRJZ25vcmVQYXR0ZXJuYCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHBhdHRlcm5zLlxuICAgKiBAcGFyYW0gYWJzb2x1dGVSb290UGF0aCB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIHBhdGhzIHRvIGJlIGNvbnNpZGVyZWRcbiAgICogQHBhcmFtIHBhdHRlcm5zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdpdChhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmcsIHBhdHRlcm5zOiBzdHJpbmdbXSk6IEdpdElnbm9yZVN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IEdpdElnbm9yZVN0cmF0ZWd5KGFic29sdXRlUm9vdFBhdGgsIHBhdHRlcm5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZ25vcmVzIGZpbGUgcGF0aHMgYmFzZWQgb24gdGhlIFtgLmRvY2tlcmlnbm9yZSBzcGVjaWZpY2F0aW9uYF0oaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9idWlsZGVyLyNkb2NrZXJpZ25vcmUtZmlsZSkuXG4gICAqXG4gICAqIEByZXR1cm5zIGBEb2NrZXJJZ25vcmVQYXR0ZXJuYCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHBhdHRlcm5zLlxuICAgKiBAcGFyYW0gYWJzb2x1dGVSb290UGF0aCB0aGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIHBhdGhzIHRvIGJlIGNvbnNpZGVyZWRcbiAgICogQHBhcmFtIHBhdHRlcm5zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRvY2tlcihhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmcsIHBhdHRlcm5zOiBzdHJpbmdbXSk6IERvY2tlcklnbm9yZVN0cmF0ZWd5IHtcbiAgICByZXR1cm4gbmV3IERvY2tlcklnbm9yZVN0cmF0ZWd5KGFic29sdXRlUm9vdFBhdGgsIHBhdHRlcm5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIElnbm9yZVN0cmF0ZWd5IGJhc2VkIG9uIHRoZSBgaWdub3JlTW9kZWAgYW5kIGBleGNsdWRlYCBpbiBhIGBDb3B5T3B0aW9uc2AuXG4gICAqXG4gICAqIEByZXR1cm5zIGBJZ25vcmVTdHJhdGVneWAgYmFzZWQgb24gdGhlIGBDb3B5T3B0aW9uc2BcbiAgICogQHBhcmFtIGFic29sdXRlUm9vdFBhdGggdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBwYXRocyB0byBiZSBjb25zaWRlcmVkXG4gICAqIEBwYXJhbSBvcHRpb25zIHRoZSBgQ29weU9wdGlvbnNgIHRvIGNyZWF0ZSB0aGUgYElnbm9yZVN0cmF0ZWd5YCBmcm9tXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21Db3B5T3B0aW9ucyhvcHRpb25zOiBDb3B5T3B0aW9ucywgYWJzb2x1dGVSb290UGF0aDogc3RyaW5nKTogSWdub3JlU3RyYXRlZ3kge1xuICAgIGNvbnN0IGlnbm9yZU1vZGUgPSBvcHRpb25zLmlnbm9yZU1vZGUgfHwgSWdub3JlTW9kZS5HTE9CO1xuICAgIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG5cbiAgICBzd2l0Y2ggKGlnbm9yZU1vZGUpIHtcbiAgICAgIGNhc2UgSWdub3JlTW9kZS5HTE9COlxuICAgICAgICByZXR1cm4gdGhpcy5nbG9iKGFic29sdXRlUm9vdFBhdGgsIGV4Y2x1ZGUpO1xuXG4gICAgICBjYXNlIElnbm9yZU1vZGUuR0lUOlxuICAgICAgICByZXR1cm4gdGhpcy5naXQoYWJzb2x1dGVSb290UGF0aCwgZXhjbHVkZSk7XG5cbiAgICAgIGNhc2UgSWdub3JlTW9kZS5ET0NLRVI6XG4gICAgICAgIHJldHVybiB0aGlzLmRvY2tlcihhYnNvbHV0ZVJvb3RQYXRoLCBleGNsdWRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbm90aGVyIHBhdHRlcm4uXG4gICAqIEBwYXJhbXMgcGF0dGVybiB0aGUgcGF0dGVybiB0byBhZGRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhZGQocGF0dGVybjogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gZmlsZSBwYXRoIHNob3VsZCBiZSBpZ25vcmVkIG9yIG5vdC5cbiAgICpcbiAgICogQHBhcmFtIGFic29sdXRlRmlsZVBhdGggYWJzb2x1dGUgZmlsZSBwYXRoIHRvIGJlIGFzc2Vzc2VkIGFnYWluc3QgdGhlIHBhdHRlcm5cbiAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBmaWxlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgaWdub3JlcyhhYnNvbHV0ZUZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG4vKipcbiAqIElnbm9yZXMgZmlsZSBwYXRocyBiYXNlZCBvbiBzaW1wbGUgZ2xvYiBwYXR0ZXJucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JJZ25vcmVTdHJhdGVneSBleHRlbmRzIElnbm9yZVN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGF0dGVybnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGFic29sdXRlUm9vdFBhdGg6IHN0cmluZywgcGF0dGVybnM6IHN0cmluZ1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICghcGF0aC5pc0Fic29sdXRlKGFic29sdXRlUm9vdFBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dsb2JJZ25vcmVTdHJhdGVneSBleHBlY3RzIGFuIGFic29sdXRlIGZpbGUgcGF0aCcpO1xuICAgIH1cblxuICAgIHRoaXMuYWJzb2x1dGVSb290UGF0aCA9IGFic29sdXRlUm9vdFBhdGg7XG4gICAgdGhpcy5wYXR0ZXJucyA9IHBhdHRlcm5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW5vdGhlciBwYXR0ZXJuLlxuICAgKiBAcGFyYW1zIHBhdHRlcm4gdGhlIHBhdHRlcm4gdG8gYWRkXG4gICAqL1xuICBwdWJsaWMgYWRkKHBhdHRlcm46IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBnaXZlbiBmaWxlIHBhdGggc2hvdWxkIGJlIGlnbm9yZWQgb3Igbm90LlxuICAgKlxuICAgKiBAcGFyYW0gYWJzb2x1dGVGaWxlUGF0aCBhYnNvbHV0ZSBmaWxlIHBhdGggdG8gYmUgYXNzZXNzZWQgYWdhaW5zdCB0aGUgcGF0dGVyblxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZpbGUgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICovXG4gIHB1YmxpYyBpZ25vcmVzKGFic29sdXRlRmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghcGF0aC5pc0Fic29sdXRlKGFic29sdXRlRmlsZVBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dsb2JJZ25vcmVTdHJhdGVneS5pZ25vcmVzKCkgZXhwZWN0cyBhbiBhYnNvbHV0ZSBwYXRoJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUodGhpcy5hYnNvbHV0ZVJvb3RQYXRoLCBhYnNvbHV0ZUZpbGVQYXRoKTtcbiAgICBsZXQgZXhjbHVkZU91dHB1dCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHRoaXMucGF0dGVybnMpIHtcbiAgICAgIGNvbnN0IG5lZ2F0ZSA9IHBhdHRlcm4uc3RhcnRzV2l0aCgnIScpO1xuICAgICAgY29uc3QgbWF0Y2ggPSBtaW5pbWF0Y2gocmVsYXRpdmVQYXRoLCBwYXR0ZXJuLCB7IG1hdGNoQmFzZTogdHJ1ZSwgZmxpcE5lZ2F0ZTogdHJ1ZSB9KTtcblxuICAgICAgaWYgKCFuZWdhdGUgJiYgbWF0Y2gpIHtcbiAgICAgICAgZXhjbHVkZU91dHB1dCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGUgJiYgbWF0Y2gpIHtcbiAgICAgICAgZXhjbHVkZU91dHB1dCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleGNsdWRlT3V0cHV0O1xuICB9XG59XG5cbi8qKlxuICogSWdub3JlcyBmaWxlIHBhdGhzIGJhc2VkIG9uIHRoZSBbYC5naXRpZ25vcmUgc3BlY2lmaWNhdGlvbmBdKGh0dHBzOi8vZ2l0LXNjbS5jb20vZG9jcy9naXRpZ25vcmUpLlxuICovXG5leHBvcnQgY2xhc3MgR2l0SWdub3JlU3RyYXRlZ3kgZXh0ZW5kcyBJZ25vcmVTdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYWJzb2x1dGVSb290UGF0aDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGlnbm9yZTogR2l0SWdub3JlLklnbm9yZTtcblxuICBjb25zdHJ1Y3RvcihhYnNvbHV0ZVJvb3RQYXRoOiBzdHJpbmcsIHBhdHRlcm5zOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShhYnNvbHV0ZVJvb3RQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHaXRJZ25vcmVTdHJhdGVneSBleHBlY3RzIGFuIGFic29sdXRlIGZpbGUgcGF0aCcpO1xuICAgIH1cblxuICAgIHRoaXMuYWJzb2x1dGVSb290UGF0aCA9IGFic29sdXRlUm9vdFBhdGg7XG4gICAgdGhpcy5pZ25vcmUgPSBnaXRJZ25vcmUoKS5hZGQocGF0dGVybnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW5vdGhlciBwYXR0ZXJuLlxuICAgKiBAcGFyYW1zIHBhdHRlcm4gdGhlIHBhdHRlcm4gdG8gYWRkXG4gICAqL1xuICBwdWJsaWMgYWRkKHBhdHRlcm46IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlLmFkZChwYXR0ZXJuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBnaXZlbiBmaWxlIHBhdGggc2hvdWxkIGJlIGlnbm9yZWQgb3Igbm90LlxuICAgKlxuICAgKiBAcGFyYW0gYWJzb2x1dGVGaWxlUGF0aCBhYnNvbHV0ZSBmaWxlIHBhdGggdG8gYmUgYXNzZXNzZWQgYWdhaW5zdCB0aGUgcGF0dGVyblxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZpbGUgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICovXG4gIHB1YmxpYyBpZ25vcmVzKGFic29sdXRlRmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghcGF0aC5pc0Fic29sdXRlKGFic29sdXRlRmlsZVBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dpdElnbm9yZVN0cmF0ZWd5Lmlnbm9yZXMoKSBleHBlY3RzIGFuIGFic29sdXRlIHBhdGgnKTtcbiAgICB9XG5cbiAgICBsZXQgcmVsYXRpdmVQYXRoID0gcGF0aC5yZWxhdGl2ZSh0aGlzLmFic29sdXRlUm9vdFBhdGgsIGFic29sdXRlRmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIHRoaXMuaWdub3JlLmlnbm9yZXMocmVsYXRpdmVQYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIElnbm9yZXMgZmlsZSBwYXRocyBiYXNlZCBvbiB0aGUgW2AuZG9ja2VyaWdub3JlIHNwZWNpZmljYXRpb25gXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL2J1aWxkZXIvI2RvY2tlcmlnbm9yZS1maWxlKS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY2tlcklnbm9yZVN0cmF0ZWd5IGV4dGVuZHMgSWdub3JlU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IGFic29sdXRlUm9vdFBhdGg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBpZ25vcmU6IERvY2tlcklnbm9yZS5JZ25vcmU7XG5cbiAgY29uc3RydWN0b3IoYWJzb2x1dGVSb290UGF0aDogc3RyaW5nLCBwYXR0ZXJuczogc3RyaW5nW10pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKCFwYXRoLmlzQWJzb2x1dGUoYWJzb2x1dGVSb290UGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9ja2VySWdub3JlU3RyYXRlZ3kgZXhwZWN0cyBhbiBhYnNvbHV0ZSBmaWxlIHBhdGgnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFic29sdXRlUm9vdFBhdGggPSBhYnNvbHV0ZVJvb3RQYXRoO1xuICAgIHRoaXMuaWdub3JlID0gZG9ja2VySWdub3JlKCkuYWRkKHBhdHRlcm5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFub3RoZXIgcGF0dGVybi5cbiAgICogQHBhcmFtcyBwYXR0ZXJuIHRoZSBwYXR0ZXJuIHRvIGFkZFxuICAgKi9cbiAgcHVibGljIGFkZChwYXR0ZXJuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZS5hZGQocGF0dGVybik7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gZmlsZSBwYXRoIHNob3VsZCBiZSBpZ25vcmVkIG9yIG5vdC5cbiAgICpcbiAgICogQHBhcmFtIGFic29sdXRlRmlsZVBhdGggYWJzb2x1dGUgZmlsZSBwYXRoIHRvIGJlIGFzc2Vzc2VkIGFnYWluc3QgdGhlIHBhdHRlcm5cbiAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBmaWxlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqL1xuICBwdWJsaWMgaWdub3JlcyhhYnNvbHV0ZUZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXBhdGguaXNBYnNvbHV0ZShhYnNvbHV0ZUZpbGVQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2NrZXJJZ25vcmVTdHJhdGVneS5pZ25vcmVzKCkgZXhwZWN0cyBhbiBhYnNvbHV0ZSBwYXRoJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlbGF0aXZlUGF0aCA9IHBhdGgucmVsYXRpdmUodGhpcy5hYnNvbHV0ZVJvb3RQYXRoLCBhYnNvbHV0ZUZpbGVQYXRoKTtcblxuICAgIHJldHVybiB0aGlzLmlnbm9yZS5pZ25vcmVzKHJlbGF0aXZlUGF0aCk7XG4gIH1cbn1cbiJdfQ==