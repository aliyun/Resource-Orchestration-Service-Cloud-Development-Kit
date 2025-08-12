using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `Templates`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.TemplatesProps")]
    public interface ITemplatesProps
    {
        /// <summary>Property category: The type of the template.</summary>
        /// <remarks>
        /// Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createdBy: The creator of the template.</summary>
        [JsiiProperty(name: "createdBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedBy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.</summary>
        [JsiiProperty(name: "createdDateAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedDateAfter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.</summary>
        [JsiiProperty(name: "createdDateBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedDateBefore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hasTrigger: Specifies whether to query the template that is configured with a trigger.</summary>
        [JsiiProperty(name: "hasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HasTrigger
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isExample: Specifies whether the template is an example template.</summary>
        [JsiiProperty(name: "isExample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsExample
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isFavorite: Specifies whether the template is added to favorites.</summary>
        [JsiiProperty(name: "isFavorite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsFavorite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shareType: The share type of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// Public
        /// Private
        /// </remarks>
        [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShareType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sortField: The field that is used to sort the templates to be queried.</summary>
        /// <remarks>
        /// Valid values:
        /// TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
        /// Popularity: The system sorts the returned templates based on the popularity of the templates.
        /// TemplateName: The system sorts the returned templates based on the names of the templates.
        /// CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
        /// UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
        /// </remarks>
        [JsiiProperty(name: "sortField", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SortField
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sortOrder: The order in which you want to sort the results.</summary>
        /// <remarks>
        /// Valid values:
        /// Ascending: ascending order.
        /// Descending: descending order. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SortOrder
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tag keys and values.</summary>
        /// <remarks>
        /// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateFormat: The format of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// JSON
        /// YAML
        /// </remarks>
        [JsiiProperty(name: "templateFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateFormat
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateName: The name of the template.</summary>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateType: The type of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// Automation: the template for automated tasks.
        /// State: the template for configuration inventories.
        /// Package: the template for software packages.
        /// </remarks>
        [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Templates`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.TemplatesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ITemplatesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property category: The type of the template.</summary>
            /// <remarks>
            /// Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createdBy: The creator of the template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "createdBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedBy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "createdDateAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedDateAfter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "createdDateBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedDateBefore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hasTrigger: Specifies whether to query the template that is configured with a trigger.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HasTrigger
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isExample: Specifies whether the template is an example template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isExample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsExample
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isFavorite: Specifies whether the template is added to favorites.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isFavorite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsFavorite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property shareType: The share type of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// Public
            /// Private
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShareType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sortField: The field that is used to sort the templates to be queried.</summary>
            /// <remarks>
            /// Valid values:
            /// TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
            /// Popularity: The system sorts the returned templates based on the popularity of the templates.
            /// TemplateName: The system sorts the returned templates based on the names of the templates.
            /// CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
            /// UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortField", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortField
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sortOrder: The order in which you want to sort the results.</summary>
            /// <remarks>
            /// Valid values:
            /// Ascending: ascending order.
            /// Descending: descending order. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The tag keys and values.</summary>
            /// <remarks>
            /// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <summary>Property templateFormat: The format of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// JSON
            /// YAML
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateFormat
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateName: The name of the template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateType: The type of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// Automation: the template for automated tasks.
            /// State: the template for configuration inventories.
            /// Package: the template for software packages.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
