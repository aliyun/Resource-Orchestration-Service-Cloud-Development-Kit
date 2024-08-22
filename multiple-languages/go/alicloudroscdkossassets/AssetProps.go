package alicloudroscdkossassets

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

type AssetProps struct {
	// File paths matching the patterns will be excluded.
	//
	// See `ignoreMode` to set the matching behavior.
	// Has no effect on Assets bundled using the `bundling` property.
	Exclude *[]*string `field:"optional" json:"exclude" yaml:"exclude"`
	// A strategy for how to handle symlinks.
	FollowSymlinks alicloudroscdkcore.SymlinkFollowMode `field:"optional" json:"followSymlinks" yaml:"followSymlinks"`
	// The ignore behavior to use for `exclude` patterns.
	IgnoreMode alicloudroscdkcore.IgnoreMode `field:"optional" json:"ignoreMode" yaml:"ignoreMode"`
	// Specify a custom hash for this asset.
	//
	// If `assetHashType` is set it must
	// be set to `AssetHashType.CUSTOM`. For consistency, this custom hash will
	// be SHA256 hashed and encoded as hex. The resulting hash will be the asset
	// hash.
	//
	// NOTE: the hash is used in order to identify a specific revision of the asset, and
	// used for optimizing and caching deployment activities related to this asset such as
	// packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
	// need to make sure it is updated every time the asset changes, or otherwise it is
	// possible that some deployments will not be invalidated.
	AssetHash *string `field:"optional" json:"assetHash" yaml:"assetHash"`
	// Specifies the type of hash to calculate for this asset.
	//
	// If `assetHash` is configured, this option must be `undefined` or
	// `AssetHashType.CUSTOM`.
	AssetHashType alicloudroscdkcore.AssetHashType `field:"optional" json:"assetHashType" yaml:"assetHashType"`
	// Bundle the asset by executing a command in a Docker container or a custom bundling provider.
	//
	// The asset path will be mounted at `/asset-input`. The Docker
	// container is responsible for putting content at `/asset-output`.
	// The content at `/asset-output` will be zipped and used as the
	// final asset.
	Bundling *alicloudroscdkcore.BundlingOptions `field:"optional" json:"bundling" yaml:"bundling"`
	// Whether or not the asset needs to exist beyond deployment time;
	//
	// i.e.
	// are copied over to a different location and not needed afterwards.
	// Setting this property to true has an impact on the lifecycle of the asset,
	// because we will assume that it is safe to delete after the ROS
	// deployment succeeds.
	//
	// For example, FC Function assets are copied over to Function during
	// deployment. Therefore, it is not necessary to store the asset in OSS bucket,
	// so we consider those deployTime assets.
	DeployTime *bool `field:"optional" json:"deployTime" yaml:"deployTime"`
	// The disk location of the asset.
	//
	// The path should refer to one of the following:
	// - A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket.
	// - A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.
	Path *string `field:"required" json:"path" yaml:"path"`
}

