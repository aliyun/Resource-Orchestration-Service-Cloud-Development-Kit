using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `Environment`.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IEnvironment")]
    public interface IEnvironment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BindResourceId: The id or vpcId of the bound container instance.</summary>
        [JsiiProperty(name: "attrBindResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindResourceId
        {
            get;
        }

        /// <summary>Attribute BindResourceType: Binding resource type.</summary>
        [JsiiProperty(name: "attrBindResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindResourceType
        {
            get;
        }

        /// <summary>Attribute BindVpcCidr: The network segment of the bound vpc.</summary>
        [JsiiProperty(name: "attrBindVpcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBindVpcCidr
        {
            get;
        }

        /// <summary>Attribute EnvironmentId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentId
        {
            get;
        }

        /// <summary>Attribute EnvironmentName: The name of the resource.</summary>
        [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentName
        {
            get;
        }

        /// <summary>Attribute EnvironmentSubType: Subtype of environment.</summary>
        [JsiiProperty(name: "attrEnvironmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentSubType
        {
            get;
        }

        /// <summary>Attribute EnvironmentType: Type of environment.</summary>
        [JsiiProperty(name: "attrEnvironmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentType
        {
            get;
        }

        /// <summary>Attribute FeePackage: Paid package.</summary>
        [JsiiProperty(name: "attrFeePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFeePackage
        {
            get;
        }

        /// <summary>Attribute GrafanaDatasourceUid: The uid of the Grafana data source.</summary>
        [JsiiProperty(name: "attrGrafanaDatasourceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaDatasourceUid
        {
            get;
        }

        /// <summary>Attribute GrafanaFolderUid: Binding Grafana directory uid.</summary>
        [JsiiProperty(name: "attrGrafanaFolderUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaFolderUid
        {
            get;
        }

        /// <summary>Attribute ManagedType: Hosting type.</summary>
        [JsiiProperty(name: "attrManagedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrManagedType
        {
            get;
        }

        /// <summary>Attribute PrometheusInstanceId: The ID of the prometheus instance.</summary>
        [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrometheusInstanceId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Tags: The tag of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute UserId: User ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.EnvironmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps Props
        {
            get;
        }

        /// <summary>Represents a `Environment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironment), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IEnvironment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BindResourceId: The id or vpcId of the bound container instance.</summary>
            [JsiiProperty(name: "attrBindResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BindResourceType: Binding resource type.</summary>
            [JsiiProperty(name: "attrBindResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BindVpcCidr: The network segment of the bound vpc.</summary>
            [JsiiProperty(name: "attrBindVpcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBindVpcCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentName: The name of the resource.</summary>
            [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentSubType: Subtype of environment.</summary>
            [JsiiProperty(name: "attrEnvironmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentSubType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentType: Type of environment.</summary>
            [JsiiProperty(name: "attrEnvironmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FeePackage: Paid package.</summary>
            [JsiiProperty(name: "attrFeePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFeePackage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GrafanaDatasourceUid: The uid of the Grafana data source.</summary>
            [JsiiProperty(name: "attrGrafanaDatasourceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaDatasourceUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GrafanaFolderUid: Binding Grafana directory uid.</summary>
            [JsiiProperty(name: "attrGrafanaFolderUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaFolderUid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ManagedType: Hosting type.</summary>
            [JsiiProperty(name: "attrManagedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrManagedType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrometheusInstanceId: The ID of the prometheus instance.</summary>
            [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrometheusInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag of the resource.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: User ID.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.EnvironmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps>()!;
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
