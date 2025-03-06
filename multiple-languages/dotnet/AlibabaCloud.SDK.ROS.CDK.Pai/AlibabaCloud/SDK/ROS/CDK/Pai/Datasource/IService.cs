using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Represents a `Service`.</summary>
    [JsiiInterface(nativeType: typeof(IService), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IService")]
    public interface IService : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccessToken: The request token of the service.</summary>
        [JsiiProperty(name: "attrAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessToken
        {
            get;
        }

        /// <summary>Attribute CallerUid: The user ID of the account that is used to create the service.</summary>
        [JsiiProperty(name: "attrCallerUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCallerUid
        {
            get;
        }

        /// <summary>Attribute Cpu: The CPU that you applied for each instance.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpu
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the service was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CurrentVersion: The current version of the model.</summary>
        [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCurrentVersion
        {
            get;
        }

        /// <summary>Attribute ExtraData: The additional information about the service.</summary>
        [JsiiProperty(name: "attrExtraData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExtraData
        {
            get;
        }

        /// <summary>Attribute Gpu: The GPU that you applied for each instance.</summary>
        [JsiiProperty(name: "attrGpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGpu
        {
            get;
        }

        /// <summary>Attribute Image: The data image of the service.</summary>
        [JsiiProperty(name: "attrImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImage
        {
            get;
        }

        /// <summary>Attribute InternetEndpoint: The public endpoint of the service.</summary>
        [JsiiProperty(name: "attrInternetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetEndpoint
        {
            get;
        }

        /// <summary>Attribute IntranetEndpoint: The private endpoint of the service.</summary>
        [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetEndpoint
        {
            get;
        }

        /// <summary>Attribute Labels: The tags of the service.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLabels
        {
            get;
        }

        /// <summary>Attribute LatestVersion: The latest version of the service.</summary>
        [JsiiProperty(name: "attrLatestVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestVersion
        {
            get;
        }

        /// <summary>Attribute Memory: The memory that you applied for each instance.</summary>
        [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemory
        {
            get;
        }

        /// <summary>Attribute Message: The summary of the service.</summary>
        [JsiiProperty(name: "attrMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessage
        {
            get;
        }

        /// <summary>Attribute Namespace: The namespace of the service.</summary>
        [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespace
        {
            get;
        }

        /// <summary>Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.</summary>
        [JsiiProperty(name: "attrParentUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParentUid
        {
            get;
        }

        /// <summary>Attribute PendingInstance: The number of instances for the suspended service.</summary>
        [JsiiProperty(name: "attrPendingInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPendingInstance
        {
            get;
        }

        /// <summary>Attribute Reason: The reason why the service is in the current state.</summary>
        [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReason
        {
            get;
        }

        /// <summary>Attribute Resource: The resource group to which the service belongs.</summary>
        [JsiiProperty(name: "attrResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResource
        {
            get;
        }

        /// <summary>Attribute ResourceAlias: The alias of the resource group to which the service belongs.</summary>
        [JsiiProperty(name: "attrResourceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceAlias
        {
            get;
        }

        /// <summary>Attribute Role: The role of the service.</summary>
        [JsiiProperty(name: "attrRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRole
        {
            get;
        }

        /// <summary>Attribute RoleAttrs: The additional attributes of the service role.</summary>
        [JsiiProperty(name: "attrRoleAttrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleAttrs
        {
            get;
        }

        /// <summary>Attribute RunningInstance: The number of instances for the running service.</summary>
        [JsiiProperty(name: "attrRunningInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRunningInstance
        {
            get;
        }

        /// <summary>Attribute SafetyLock: The security lock of the service.</summary>
        [JsiiProperty(name: "attrSafetyLock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSafetyLock
        {
            get;
        }

        /// <summary>Attribute ServiceConfig: The configurations of the service.</summary>
        [JsiiProperty(name: "attrServiceConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceConfig
        {
            get;
        }

        /// <summary>Attribute ServiceGroup: The group to which the service belongs.</summary>
        [JsiiProperty(name: "attrServiceGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceGroup
        {
            get;
        }

        /// <summary>Attribute ServiceName: The name of the service.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceName
        {
            get;
        }

        /// <summary>Attribute ServiceUid: The ID of the service.</summary>
        /// <remarks>
        /// The value of this property is the same as the value of ServiceId.
        /// </remarks>
        [JsiiProperty(name: "attrServiceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceUid
        {
            get;
        }

        /// <summary>Attribute TotalInstance: The total number of instances of the service.</summary>
        [JsiiProperty(name: "attrTotalInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTotalInstance
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the service was updated.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute Weight: The weight of the canary release for the service.</summary>
        [JsiiProperty(name: "attrWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWeight
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.ServiceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IServiceProps Props
        {
            get;
        }

        /// <summary>Represents a `Service`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IService), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IService")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IService
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccessToken: The request token of the service.</summary>
            [JsiiProperty(name: "attrAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessToken
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CallerUid: The user ID of the account that is used to create the service.</summary>
            [JsiiProperty(name: "attrCallerUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCallerUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cpu: The CPU that you applied for each instance.</summary>
            [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the service was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CurrentVersion: The current version of the model.</summary>
            [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCurrentVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExtraData: The additional information about the service.</summary>
            [JsiiProperty(name: "attrExtraData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExtraData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Gpu: The GPU that you applied for each instance.</summary>
            [JsiiProperty(name: "attrGpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Image: The data image of the service.</summary>
            [JsiiProperty(name: "attrImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetEndpoint: The public endpoint of the service.</summary>
            [JsiiProperty(name: "attrInternetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetEndpoint: The private endpoint of the service.</summary>
            [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Labels: The tags of the service.</summary>
            [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLabels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestVersion: The latest version of the service.</summary>
            [JsiiProperty(name: "attrLatestVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Memory: The memory that you applied for each instance.</summary>
            [JsiiProperty(name: "attrMemory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Message: The summary of the service.</summary>
            [JsiiProperty(name: "attrMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Namespace: The namespace of the service.</summary>
            [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.</summary>
            [JsiiProperty(name: "attrParentUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParentUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PendingInstance: The number of instances for the suspended service.</summary>
            [JsiiProperty(name: "attrPendingInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPendingInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Reason: The reason why the service is in the current state.</summary>
            [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Resource: The resource group to which the service belongs.</summary>
            [JsiiProperty(name: "attrResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceAlias: The alias of the resource group to which the service belongs.</summary>
            [JsiiProperty(name: "attrResourceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Role: The role of the service.</summary>
            [JsiiProperty(name: "attrRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRole
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleAttrs: The additional attributes of the service role.</summary>
            [JsiiProperty(name: "attrRoleAttrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleAttrs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RunningInstance: The number of instances for the running service.</summary>
            [JsiiProperty(name: "attrRunningInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRunningInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SafetyLock: The security lock of the service.</summary>
            [JsiiProperty(name: "attrSafetyLock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSafetyLock
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceConfig: The configurations of the service.</summary>
            [JsiiProperty(name: "attrServiceConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceGroup: The group to which the service belongs.</summary>
            [JsiiProperty(name: "attrServiceGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceName: The name of the service.</summary>
            [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceUid: The ID of the service.</summary>
            /// <remarks>
            /// The value of this property is the same as the value of ServiceId.
            /// </remarks>
            [JsiiProperty(name: "attrServiceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TotalInstance: The total number of instances of the service.</summary>
            [JsiiProperty(name: "attrTotalInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTotalInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the service was updated.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Weight: The weight of the canary release for the service.</summary>
            [JsiiProperty(name: "attrWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWeight
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.ServiceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IServiceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IServiceProps>()!;
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
