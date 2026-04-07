using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::JdbcDataSource`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosJdbcDataSource`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Gpdb.JdbcDataSource), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.JdbcDataSource", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-gpdb.JdbcDataSourceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class JdbcDataSource : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSource
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public JdbcDataSource(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected JdbcDataSource(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected JdbcDataSource(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.</summary>
        /// <remarks>
        /// Otherwise, "" is returned "".
        /// </remarks>
        [JsiiProperty(name: "attrConnectionMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionStatus: Service Status:.</summary>
        [JsiiProperty(name: "attrConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DataSourceDescription: Data Source Description.</summary>
        [JsiiProperty(name: "attrDataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDataSourceDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DataSourceId: The data source ID.</summary>
        [JsiiProperty(name: "attrDataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDataSourceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DataSourceName: Data Source Name.</summary>
        [JsiiProperty(name: "attrDataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDataSourceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DataSourceType: Data Source Type.</summary>
        [JsiiProperty(name: "attrDataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDataSourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExternalDataServiceId: External Data Service id.</summary>
        [JsiiProperty(name: "attrExternalDataServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExternalDataServiceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JdbcConnectionString: The JDBC connection string.</summary>
        [JsiiProperty(name: "attrJdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrJdbcConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JdbcPassword: The password of the database account.</summary>
        [JsiiProperty(name: "attrJdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrJdbcPassword
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute JdbcUserName: The name of the database account.</summary>
        [JsiiProperty(name: "attrJdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrJdbcUserName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ModifyTime: Last modification time.</summary>
        [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrModifyTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.</summary>
        /// <remarks>
        /// A null value in the normal Running state.
        /// </remarks>
        [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStatusMessage
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.JdbcDataSourceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
