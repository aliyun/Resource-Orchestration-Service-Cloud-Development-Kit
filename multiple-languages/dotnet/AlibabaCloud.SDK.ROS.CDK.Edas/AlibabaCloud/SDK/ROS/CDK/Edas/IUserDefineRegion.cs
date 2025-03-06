using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Represents a `UserDefineRegion`.</summary>
    [JsiiInterface(nativeType: typeof(IUserDefineRegion), fullyQualifiedName: "@alicloud/ros-cdk-edas.IUserDefineRegion")]
    public interface IUserDefineRegion : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BelongRegion: Under the physical region ID.</summary>
        [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBelongRegion
        {
            get;
        }

        /// <summary>Attribute DebugEnable: Whether debug is enable.</summary>
        [JsiiProperty(name: "attrDebugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDebugEnable
        {
            get;
        }

        /// <summary>Attribute Id: Resource ID.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrId
        {
            get;
        }

        /// <summary>Attribute RegionName: Region name.</summary>
        [JsiiProperty(name: "attrRegionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionName
        {
            get;
        }

        /// <summary>Attribute UserId: User account ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-edas.UserDefineRegionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps Props
        {
            get;
        }

        /// <summary>Represents a `UserDefineRegion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserDefineRegion), fullyQualifiedName: "@alicloud/ros-cdk-edas.IUserDefineRegion")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegion
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BelongRegion: Under the physical region ID.</summary>
            [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBelongRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DebugEnable: Whether debug is enable.</summary>
            [JsiiProperty(name: "attrDebugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDebugEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Id: Resource ID.</summary>
            [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionName: Region name.</summary>
            [JsiiProperty(name: "attrRegionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: User account ID.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-edas.UserDefineRegionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
