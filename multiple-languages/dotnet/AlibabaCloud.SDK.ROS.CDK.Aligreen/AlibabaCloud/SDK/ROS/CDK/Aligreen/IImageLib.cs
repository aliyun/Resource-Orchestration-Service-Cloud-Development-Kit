using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Represents a `ImageLib`.</summary>
    [JsiiInterface(nativeType: typeof(IImageLib), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IImageLib")]
    public interface IImageLib : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BizTypes: List of business scenarios.</summary>
        [JsiiProperty(name: "attrBizTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBizTypes
        {
            get;
        }

        /// <summary>Attribute Category: The category of the image library.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute Enable: Specifies whether to enable the image library.</summary>
        [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnable
        {
            get;
        }

        /// <summary>Attribute ImageLibId: The ID of the primary key of the image library.</summary>
        [JsiiProperty(name: "attrImageLibId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageLibId
        {
            get;
        }

        /// <summary>Attribute ImageLibName: The name of the image library defined by the customer.</summary>
        [JsiiProperty(name: "attrImageLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageLibName
        {
            get;
        }

        /// <summary>Attribute Scene: The moderation scenario to which the custom image library applies.</summary>
        [JsiiProperty(name: "attrScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScene
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.ImageLibProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Aligreen.IImageLibProps Props
        {
            get;
        }

        /// <summary>Represents a `ImageLib`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImageLib), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IImageLib")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IImageLib
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BizTypes: List of business scenarios.</summary>
            [JsiiProperty(name: "attrBizTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBizTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Category: The category of the image library.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Enable: Specifies whether to enable the image library.</summary>
            [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageLibId: The ID of the primary key of the image library.</summary>
            [JsiiProperty(name: "attrImageLibId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageLibId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageLibName: The name of the image library defined by the customer.</summary>
            [JsiiProperty(name: "attrImageLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageLibName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scene: The moderation scenario to which the custom image library applies.</summary>
            [JsiiProperty(name: "attrScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScene
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.ImageLibProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Aligreen.IImageLibProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.IImageLibProps>()!;
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
