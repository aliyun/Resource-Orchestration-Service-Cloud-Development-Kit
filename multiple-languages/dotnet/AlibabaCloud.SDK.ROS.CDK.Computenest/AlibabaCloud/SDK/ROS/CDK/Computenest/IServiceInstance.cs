using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Computenest
{
    /// <summary>Represents a `ServiceInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceInstance), fullyQualifiedName: "@alicloud/ros-cdk-computenest.IServiceInstance")]
    public interface IServiceInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Components: Additional billing items.</summary>
        [JsiiProperty(name: "attrComponents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrComponents
        {
            get;
        }

        /// <summary>Attribute CreateTime: Creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.</summary>
        [JsiiProperty(name: "attrEnableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableInstanceOps
        {
            get;
        }

        /// <summary>Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.</summary>
        [JsiiProperty(name: "attrEnableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableUserPrometheus
        {
            get;
        }

        /// <summary>Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.</summary>
        [JsiiProperty(name: "attrIsOperated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsOperated
        {
            get;
        }

        /// <summary>Attribute LicenseEndTime: License expiration time.</summary>
        [JsiiProperty(name: "attrLicenseEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLicenseEndTime
        {
            get;
        }

        /// <summary>Attribute Name: The name of the service instance.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute NetworkConfig: Network configuration information.</summary>
        [JsiiProperty(name: "attrNetworkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkConfig
        {
            get;
        }

        /// <summary>Attribute Outputs: Create the output Field returned by the service instance.</summary>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOutputs
        {
            get;
        }

        /// <summary>Attribute Parameters: The parameters entered by the deployment service instance.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameters
        {
            get;
        }

        /// <summary>Attribute PredefinedParameterName: Package name.</summary>
        [JsiiProperty(name: "attrPredefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPredefinedParameterName
        {
            get;
        }

        /// <summary>Attribute Progress: The deployment progress of the service instance.</summary>
        /// <remarks>
        /// Unit:%.
        /// </remarks>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProgress
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Service: Service details.</summary>
        [JsiiProperty(name: "attrService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrService
        {
            get;
        }

        /// <summary>Attribute ServiceInstanceId: The ID of the service instance.</summary>
        [JsiiProperty(name: "attrServiceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceInstanceId
        {
            get;
        }

        /// <summary>Attribute ServiceType: Service type.</summary>
        [JsiiProperty(name: "attrServiceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceType
        {
            get;
        }

        /// <summary>Attribute Source: The source of the service instance.</summary>
        [JsiiProperty(name: "attrSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSource
        {
            get;
        }

        /// <summary>Attribute StatusDetail: The status description of the deployment instance.</summary>
        [JsiiProperty(name: "attrStatusDetail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatusDetail
        {
            get;
        }

        /// <summary>Attribute SupplierUid: Service provider AliUid.</summary>
        [JsiiProperty(name: "attrSupplierUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSupplierUid
        {
            get;
        }

        /// <summary>Attribute Tags: User-defined labels.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TemplateName: Template name.</summary>
        [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateName
        {
            get;
        }

        /// <summary>Attribute UpdateTime: Update time.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute UserId: AliUid of the user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.ServiceInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `ServiceInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceInstance), fullyQualifiedName: "@alicloud/ros-cdk-computenest.IServiceInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Components: Additional billing items.</summary>
            [JsiiProperty(name: "attrComponents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrComponents
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableInstanceOps: Whether the service instance has the O &amp; M function.</summary>
            [JsiiProperty(name: "attrEnableInstanceOps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableInstanceOps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableUserPrometheus: Whether Prometheus monitoring is enabled.</summary>
            [JsiiProperty(name: "attrEnableUserPrometheus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableUserPrometheus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsOperated: Whether the generation O &amp; M function of the service instance is enabled.</summary>
            [JsiiProperty(name: "attrIsOperated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsOperated
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LicenseEndTime: License expiration time.</summary>
            [JsiiProperty(name: "attrLicenseEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLicenseEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the service instance.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkConfig: Network configuration information.</summary>
            [JsiiProperty(name: "attrNetworkConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Outputs: Create the output Field returned by the service instance.</summary>
            [JsiiProperty(name: "attrOutputs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOutputs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Parameters: The parameters entered by the deployment service instance.</summary>
            [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PredefinedParameterName: Package name.</summary>
            [JsiiProperty(name: "attrPredefinedParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPredefinedParameterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Progress: The deployment progress of the service instance.</summary>
            /// <remarks>
            /// Unit:%.
            /// </remarks>
            [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProgress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Service: Service details.</summary>
            [JsiiProperty(name: "attrService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrService
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceInstanceId: The ID of the service instance.</summary>
            [JsiiProperty(name: "attrServiceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceType: Service type.</summary>
            [JsiiProperty(name: "attrServiceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Source: The source of the service instance.</summary>
            [JsiiProperty(name: "attrSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StatusDetail: The status description of the deployment instance.</summary>
            [JsiiProperty(name: "attrStatusDetail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatusDetail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SupplierUid: Service provider AliUid.</summary>
            [JsiiProperty(name: "attrSupplierUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSupplierUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: User-defined labels.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateName: Template name.</summary>
            [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: Update time.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: AliUid of the user.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-computenest.ServiceInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Computenest.IServiceInstanceProps>()!;
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
