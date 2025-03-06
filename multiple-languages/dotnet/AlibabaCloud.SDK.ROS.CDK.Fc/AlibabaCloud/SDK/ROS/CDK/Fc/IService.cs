using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Represents a `Service`.</summary>
    [JsiiInterface(nativeType: typeof(IService), fullyQualifiedName: "@alicloud/ros-cdk-fc.IService")]
    public interface IService : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InternetAccess: Whether enable Internet access.</summary>
        [JsiiProperty(name: "attrInternetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetAccess
        {
            get;
        }

        /// <summary>Attribute LogProject: Log project of service.</summary>
        [JsiiProperty(name: "attrLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogProject
        {
            get;
        }

        /// <summary>Attribute Logstore: Log store of service.</summary>
        [JsiiProperty(name: "attrLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogstore
        {
            get;
        }

        /// <summary>Attribute Role: Role of service.</summary>
        [JsiiProperty(name: "attrRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRole
        {
            get;
        }

        /// <summary>Attribute ServiceId: The service ID.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceId
        {
            get;
        }

        /// <summary>Attribute ServiceName: The service name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceName
        {
            get;
        }

        /// <summary>Attribute Tags: Tags of service.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.ServiceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps Props
        {
            get;
        }

        /// <summary>Represents a `Service`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IService), fullyQualifiedName: "@alicloud/ros-cdk-fc.IService")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IService
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InternetAccess: Whether enable Internet access.</summary>
            [JsiiProperty(name: "attrInternetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetAccess
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LogProject: Log project of service.</summary>
            [JsiiProperty(name: "attrLogProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Logstore: Log store of service.</summary>
            [JsiiProperty(name: "attrLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogstore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Role: Role of service.</summary>
            [JsiiProperty(name: "attrRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRole
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceId: The service ID.</summary>
            [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceName: The service name.</summary>
            [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: Tags of service.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: VPC ID.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.ServiceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps>()!;
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
