using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Represents a `LayerVersion`.</summary>
    [JsiiInterface(nativeType: typeof(ILayerVersion), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ILayerVersion")]
    public interface ILayerVersion : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.</summary>
        [JsiiProperty(name: "attrAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAcl
        {
            get;
        }

        /// <summary>Attribute CodeSize: The code package size of the layer, in bytes.</summary>
        [JsiiProperty(name: "attrCodeSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeSize
        {
            get;
        }

        /// <summary>Attribute CompatibleRuntime: List of runtime environments supported by the layer.</summary>
        [JsiiProperty(name: "attrCompatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCompatibleRuntime
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: Description of the version.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute LayerName: Name of the layer.</summary>
        [JsiiProperty(name: "attrLayerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLayerName
        {
            get;
        }

        /// <summary>Attribute LayerVersionArn: Layer version ARN.</summary>
        /// <remarks>
        /// The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
        /// </remarks>
        [JsiiProperty(name: "attrLayerVersionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLayerVersionArn
        {
            get;
        }

        /// <summary>Attribute License: Layer License Agreement.</summary>
        [JsiiProperty(name: "attrLicense", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLicense
        {
            get;
        }

        /// <summary>Attribute Version: The version of the layer.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersion
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc3.LayerVersionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fc3.ILayerVersionProps Props
        {
            get;
        }

        /// <summary>Represents a `LayerVersion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILayerVersion), fullyQualifiedName: "@alicloud/ros-cdk-fc3.ILayerVersion")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.ILayerVersion
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Acl: The access permission of the layer, 1: public, 0: private, default is private.</summary>
            [JsiiProperty(name: "attrAcl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAcl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeSize: The code package size of the layer, in bytes.</summary>
            [JsiiProperty(name: "attrCodeSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CompatibleRuntime: List of runtime environments supported by the layer.</summary>
            [JsiiProperty(name: "attrCompatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCompatibleRuntime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Description of the version.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LayerName: Name of the layer.</summary>
            [JsiiProperty(name: "attrLayerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLayerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LayerVersionArn: Layer version ARN.</summary>
            /// <remarks>
            /// The format is acs:fc:{region }:{ accountID}:layers/{layerName}/versions/{layerVersion}.
            /// </remarks>
            [JsiiProperty(name: "attrLayerVersionArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLayerVersionArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute License: Layer License Agreement.</summary>
            [JsiiProperty(name: "attrLicense", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLicense
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Version: The version of the layer.</summary>
            [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc3.LayerVersionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fc3.ILayerVersionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc3.ILayerVersionProps>()!;
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
