using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `RosTemplates`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosTemplatesProps")]
    public interface IRosTemplatesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
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

        /// <remarks>
        /// <strong>Property</strong>: createdBy: The creator of the template.
        /// </remarks>
        [JsiiProperty(name: "createdBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedBy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
        /// </remarks>
        [JsiiProperty(name: "createdDateAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedDateAfter
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
        /// </remarks>
        [JsiiProperty(name: "createdDateBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreatedDateBefore
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hasTrigger: Specifies whether to query the template that is configured with a trigger.
        /// </remarks>
        [JsiiProperty(name: "hasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HasTrigger
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isExample: Specifies whether the template is an example template.
        /// </remarks>
        [JsiiProperty(name: "isExample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsExample
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isFavorite: Specifies whether the template is added to favorites.
        /// </remarks>
        [JsiiProperty(name: "isFavorite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsFavorite
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shareType: The share type of the template. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: sortField: The field that is used to sort the templates to be queried. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: sortOrder: The order in which you want to sort the results. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
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

        /// <remarks>
        /// <strong>Property</strong>: templateFormat: The format of the template. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: templateName: The name of the template.
        /// </remarks>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: templateType: The type of the template. Valid values:
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

        /// <summary>Properties for defining a `RosTemplates`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosTemplatesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IRosTemplatesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: createdBy: The creator of the template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedBy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdDateAfter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedDateAfter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createdDateBefore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreatedDateBefore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hasTrigger: Specifies whether to query the template that is configured with a trigger.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HasTrigger
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isExample: Specifies whether the template is an example template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isExample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsExample
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isFavorite: Specifies whether the template is added to favorites.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isFavorite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsFavorite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shareType: The share type of the template. Valid values:
            /// Public
            /// Private
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShareType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sortField: The field that is used to sort the templates to be queried. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: sortOrder: The order in which you want to sort the results. Valid values:
            /// Ascending: ascending order.
            /// Descending: descending order. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortOrder
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateFormat: The format of the template. Valid values:
            /// JSON
            /// YAML
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateFormat
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateName: The name of the template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateType: The type of the template. Valid values:
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
