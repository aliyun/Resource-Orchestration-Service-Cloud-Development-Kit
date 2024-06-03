using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options applied when copying directories.</summary>
    [JsiiInterface(nativeType: typeof(ICopyOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.CopyOptions")]
    public interface ICopyOptions
    {
        /// <summary>File paths matching the patterns will be excluded.</summary>
        /// <remarks>
        /// See <c>ignoreMode</c> to set the matching behavior.
        /// Has no effect on Assets bundled using the <c>bundling</c> property.
        ///
        /// <strong>Default</strong>: - nothing is excluded
        /// </remarks>
        [JsiiProperty(name: "exclude", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? Exclude
        {
            get
            {
                return null;
            }
        }

        /// <summary>A strategy for how to handle symlinks.</summary>
        /// <remarks>
        /// <strong>Default</strong>: SymlinkFollowMode.NEVER
        /// </remarks>
        [JsiiProperty(name: "follow", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.SymlinkFollowMode\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode? Follow
        {
            get
            {
                return null;
            }
        }

        /// <summary>The ignore behavior to use for `exclude` patterns.</summary>
        /// <remarks>
        /// <strong>Default</strong>: IgnoreMode.GLOB
        /// </remarks>
        [JsiiProperty(name: "ignoreMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreMode\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode? IgnoreMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options applied when copying directories.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICopyOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.CopyOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>File paths matching the patterns will be excluded.</summary>
            /// <remarks>
            /// See <c>ignoreMode</c> to set the matching behavior.
            /// Has no effect on Assets bundled using the <c>bundling</c> property.
            ///
            /// <strong>Default</strong>: - nothing is excluded
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclude", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Exclude
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>A strategy for how to handle symlinks.</summary>
            /// <remarks>
            /// <strong>Default</strong>: SymlinkFollowMode.NEVER
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.SymlinkFollowMode\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode? Follow
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode?>();
            }

            /// <summary>The ignore behavior to use for `exclude` patterns.</summary>
            /// <remarks>
            /// <strong>Default</strong>: IgnoreMode.GLOB
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreMode\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode? IgnoreMode
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode?>();
            }
        }
    }
}
