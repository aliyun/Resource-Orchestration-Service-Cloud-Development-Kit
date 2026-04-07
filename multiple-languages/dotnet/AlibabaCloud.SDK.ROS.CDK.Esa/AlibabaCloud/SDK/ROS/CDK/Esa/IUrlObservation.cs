using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `UrlObservation`.</summary>
    [JsiiInterface(nativeType: typeof(IUrlObservation), fullyQualifiedName: "@alicloud/ros-cdk-esa.IUrlObservation")]
    public interface IUrlObservation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigId: Config Id.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute SdkType: SDK integration mode.</summary>
        [JsiiProperty(name: "attrSdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSdkType
        {
            get;
        }

        /// <summary>Attribute Url: The URL of the page to monitor.</summary>
        [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.UrlObservationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IUrlObservationProps Props
        {
            get;
        }

        /// <summary>Represents a `UrlObservation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUrlObservation), fullyQualifiedName: "@alicloud/ros-cdk-esa.IUrlObservation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IUrlObservation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigId: Config Id.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SdkType: SDK integration mode.</summary>
            [JsiiProperty(name: "attrSdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSdkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Url: The URL of the page to monitor.</summary>
            [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.UrlObservationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IUrlObservationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IUrlObservationProps>()!;
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
