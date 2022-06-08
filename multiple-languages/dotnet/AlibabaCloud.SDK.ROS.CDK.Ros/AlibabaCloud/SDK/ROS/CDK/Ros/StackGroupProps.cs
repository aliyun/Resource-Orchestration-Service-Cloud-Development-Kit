using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::StackGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.StackGroupProps")]
    public class StackGroupProps : AlibabaCloud.SDK.ROS.CDK.Ros.IStackGroupProps
    {
        /// <summary>Property stackGroupName: undefined.</summary>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StackGroupName
        {
            get;
            set;
        }

        /// <summary>Property administrationRoleName: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "administrationRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AdministrationRoleName
        {
            get;
            set;
        }

        /// <summary>Property autoDeployment: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoDeployment", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosStackGroup.AutoDeploymentProperty\"}]}}", isOptional: true)]
        public object? AutoDeployment
        {
            get;
            set;
        }

        /// <summary>Property description: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property dynamicTemplateBody: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dynamicTemplateBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? DynamicTemplateBody
        {
            get;
            set;
        }

        /// <summary>Property executionRoleName: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "executionRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExecutionRoleName
        {
            get;
            set;
        }

        /// <summary>Property parameters: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Parameters
        {
            get;
            set;
        }

        /// <summary>Property permissionModel: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "permissionModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PermissionModel
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property templateBody: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? TemplateBody
        {
            get;
            set;
        }

        /// <summary>Property templateId: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TemplateId
        {
            get;
            set;
        }

        /// <summary>Property templateUrl: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TemplateUrl
        {
            get;
            set;
        }

        /// <summary>Property templateVersion: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "templateVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TemplateVersion
        {
            get;
            set;
        }
    }
}
