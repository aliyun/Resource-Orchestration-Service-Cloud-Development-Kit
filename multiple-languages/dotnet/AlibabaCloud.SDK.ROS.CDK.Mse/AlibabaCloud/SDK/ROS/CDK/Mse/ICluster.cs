using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Represents a `Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(ICluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.ICluster")]
    public interface ICluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclEntryList: The list of ACL entries.</summary>
        [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclEntryList
        {
            get;
        }

        /// <summary>Attribute AclId: The ID of the ACL.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
        {
            get;
        }

        /// <summary>Attribute AppVersion: The version of the application.</summary>
        [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppVersion
        {
            get;
        }

        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute ClusterAliasName: The alias name of the cluster.</summary>
        [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterAliasName
        {
            get;
        }

        /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute ClusterName: The name of the cluster.</summary>
        [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterName
        {
            get;
        }

        /// <summary>Attribute ClusterSpecification: The specification of the cluster.</summary>
        [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterSpecification
        {
            get;
        }

        /// <summary>Attribute ClusterType: The type of the cluster.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterType
        {
            get;
        }

        /// <summary>Attribute ClusterVersion: The version of the cluster.</summary>
        [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterVersion
        {
            get;
        }

        /// <summary>Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.</summary>
        [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigAuthEnabled
        {
            get;
        }

        /// <summary>Attribute ConfigSecretEnabled: Whether to enable the configuration secret.</summary>
        [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigSecretEnabled
        {
            get;
        }

        /// <summary>Attribute ConnectionType: The connection type.</summary>
        [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionType
        {
            get;
        }

        /// <summary>Attribute Cpu: The number of CPU cores.</summary>
        [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCpu
        {
            get;
        }

        /// <summary>Attribute DiskCapacity: The disk capacity.</summary>
        [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskCapacity
        {
            get;
        }

        /// <summary>Attribute DiskType: The disk type.</summary>
        [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskType
        {
            get;
        }

        /// <summary>Attribute HealthStatus: The health status of the cluster.</summary>
        [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthStatus
        {
            get;
        }

        /// <summary>Attribute InstanceCount: The number of instances.</summary>
        [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceCount
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the cluster instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InternetAddress: The public network address of the cluster.</summary>
        [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetAddress
        {
            get;
        }

        /// <summary>Attribute InternetDomain: The public network domain of the cluster.</summary>
        [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetDomain
        {
            get;
        }

        /// <summary>Attribute InternetPort: The public network port of the cluster.</summary>
        [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetPort
        {
            get;
        }

        /// <summary>Attribute IntranetAddress: The intranet address of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetAddress
        {
            get;
        }

        /// <summary>Attribute IntranetDomain: The intranet domain of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetDomain
        {
            get;
        }

        /// <summary>Attribute IntranetPort: The intranet port of the cluster.</summary>
        [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntranetPort
        {
            get;
        }

        /// <summary>Attribute MCPEnabled: Whether to enable the MCP.</summary>
        [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMcpEnabled
        {
            get;
        }

        /// <summary>Attribute MemoryCapacity: The memory capacity.</summary>
        [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMemoryCapacity
        {
            get;
        }

        /// <summary>Attribute MseVersion: The MSE version.</summary>
        [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMseVersion
        {
            get;
        }

        /// <summary>Attribute NetType: The network type.</summary>
        [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetType
        {
            get;
        }

        /// <summary>Attribute PayInfo: The payment information.</summary>
        [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPayInfo
        {
            get;
        }

        /// <summary>Attribute PubNetworkFlow: The public network flow.</summary>
        [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPubNetworkFlow
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICluster), fullyQualifiedName: "@alicloud/ros-cdk-mse.ICluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.ICluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclEntryList: The list of ACL entries.</summary>
            [JsiiProperty(name: "attrAclEntryList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclEntryList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclId: The ID of the ACL.</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppVersion: The version of the application.</summary>
            [JsiiProperty(name: "attrAppVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterAliasName: The alias name of the cluster.</summary>
            [JsiiProperty(name: "attrClusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterAliasName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterName: The name of the cluster.</summary>
            [JsiiProperty(name: "attrClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterSpecification: The specification of the cluster.</summary>
            [JsiiProperty(name: "attrClusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterSpecification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterType: The type of the cluster.</summary>
            [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterVersion: The version of the cluster.</summary>
            [JsiiProperty(name: "attrClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.</summary>
            [JsiiProperty(name: "attrConfigAuthEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigAuthEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigSecretEnabled: Whether to enable the configuration secret.</summary>
            [JsiiProperty(name: "attrConfigSecretEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigSecretEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionType: The connection type.</summary>
            [JsiiProperty(name: "attrConnectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Cpu: The number of CPU cores.</summary>
            [JsiiProperty(name: "attrCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCpu
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskCapacity: The disk capacity.</summary>
            [JsiiProperty(name: "attrDiskCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskType: The disk type.</summary>
            [JsiiProperty(name: "attrDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthStatus: The health status of the cluster.</summary>
            [JsiiProperty(name: "attrHealthStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceCount: The number of instances.</summary>
            [JsiiProperty(name: "attrInstanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the cluster instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetAddress: The public network address of the cluster.</summary>
            [JsiiProperty(name: "attrInternetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetDomain: The public network domain of the cluster.</summary>
            [JsiiProperty(name: "attrInternetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetPort: The public network port of the cluster.</summary>
            [JsiiProperty(name: "attrInternetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetAddress: The intranet address of the cluster.</summary>
            [JsiiProperty(name: "attrIntranetAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetDomain: The intranet domain of the cluster.</summary>
            [JsiiProperty(name: "attrIntranetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntranetPort: The intranet port of the cluster.</summary>
            [JsiiProperty(name: "attrIntranetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntranetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MCPEnabled: Whether to enable the MCP.</summary>
            [JsiiProperty(name: "attrMcpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMcpEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MemoryCapacity: The memory capacity.</summary>
            [JsiiProperty(name: "attrMemoryCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMemoryCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MseVersion: The MSE version.</summary>
            [JsiiProperty(name: "attrMseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMseVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetType: The network type.</summary>
            [JsiiProperty(name: "attrNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PayInfo: The payment information.</summary>
            [JsiiProperty(name: "attrPayInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPayInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PubNetworkFlow: The public network flow.</summary>
            [JsiiProperty(name: "attrPubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPubNetworkFlow
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The ID of the VSwitch.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps>()!;
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
