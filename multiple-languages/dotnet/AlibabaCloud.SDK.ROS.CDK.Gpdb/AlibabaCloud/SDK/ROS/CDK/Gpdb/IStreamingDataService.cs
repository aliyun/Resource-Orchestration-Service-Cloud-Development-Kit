using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Represents a `StreamingDataService`.</summary>
    [JsiiInterface(nativeType: typeof(IStreamingDataService), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IStreamingDataService")]
    public interface IStreamingDataService : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ModifyTime: Modify time.</summary>
        [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifyTime
        {
            get;
        }

        /// <summary>Attribute ServiceDescription: The description of the service.</summary>
        [JsiiProperty(name: "attrServiceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceDescription
        {
            get;
        }

        /// <summary>Attribute ServiceId: Service ID.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceId
        {
            get;
        }

        /// <summary>Attribute ServiceIp: Service VIP.</summary>
        [JsiiProperty(name: "attrServiceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceIp
        {
            get;
        }

        /// <summary>Attribute ServiceManaged: Service used by Cloud products, ture is used.</summary>
        [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceManaged
        {
            get;
        }

        /// <summary>Attribute ServiceName: Service Name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceName
        {
            get;
        }

        /// <summary>Attribute ServiceOwnerId: Service id of Cloud products.</summary>
        [JsiiProperty(name: "attrServiceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceOwnerId
        {
            get;
        }

        /// <summary>Attribute ServicePort: Service vPort.</summary>
        [JsiiProperty(name: "attrServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServicePort
        {
            get;
        }

        /// <summary>Attribute ServiceSpec: Resource Specifications.</summary>
        [JsiiProperty(name: "attrServiceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceSpec
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.StreamingDataServiceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.IStreamingDataServiceProps Props
        {
            get;
        }

        /// <summary>Represents a `StreamingDataService`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStreamingDataService), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IStreamingDataService")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IStreamingDataService
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifyTime: Modify time.</summary>
            [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceDescription: The description of the service.</summary>
            [JsiiProperty(name: "attrServiceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceId: Service ID.</summary>
            [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceIp: Service VIP.</summary>
            [JsiiProperty(name: "attrServiceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceManaged: Service used by Cloud products, ture is used.</summary>
            [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceManaged
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceName: Service Name.</summary>
            [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceOwnerId: Service id of Cloud products.</summary>
            [JsiiProperty(name: "attrServiceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServicePort: Service vPort.</summary>
            [JsiiProperty(name: "attrServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServicePort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceSpec: Resource Specifications.</summary>
            [JsiiProperty(name: "attrServiceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.StreamingDataServiceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.IStreamingDataServiceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IStreamingDataServiceProps>()!;
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
