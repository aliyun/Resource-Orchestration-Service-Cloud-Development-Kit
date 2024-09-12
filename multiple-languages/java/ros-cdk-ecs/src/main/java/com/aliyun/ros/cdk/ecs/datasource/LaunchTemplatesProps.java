package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>LaunchTemplates</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.425Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps")
@software.amazon.jsii.Jsii.Proxy(LaunchTemplatesProps.Jsii$Proxy.class)
public interface LaunchTemplatesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property launchTemplateId: The ID of the launch template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     * Property launchTemplateName: The name of the launch template.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LaunchTemplatesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LaunchTemplatesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LaunchTemplatesProps> {
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateName;
        java.lang.Object refreshOptions;
        java.lang.Object templateResourceGroupId;

        /**
         * Sets the value of {@link LaunchTemplatesProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: The ID of the launch template.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: The ID of the launch template.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: The name of the launch template.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: The name of the launch template.
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getTemplateResourceGroupId}
         * @param templateResourceGroupId Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
         * @return {@code this}
         */
        public Builder templateResourceGroupId(java.lang.String templateResourceGroupId) {
            this.templateResourceGroupId = templateResourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LaunchTemplatesProps#getTemplateResourceGroupId}
         * @param templateResourceGroupId Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
         * @return {@code this}
         */
        public Builder templateResourceGroupId(com.aliyun.ros.cdk.core.IResolvable templateResourceGroupId) {
            this.templateResourceGroupId = templateResourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LaunchTemplatesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LaunchTemplatesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LaunchTemplatesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LaunchTemplatesProps {
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object templateResourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateResourceGroupId = software.amazon.jsii.Kernel.get(this, "templateResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateName = builder.launchTemplateName;
            this.refreshOptions = builder.refreshOptions;
            this.templateResourceGroupId = builder.templateResourceGroupId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getTemplateResourceGroupId() {
            return this.templateResourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateName() != null) {
                data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getTemplateResourceGroupId() != null) {
                data.set("templateResourceGroupId", om.valueToTree(this.getTemplateResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LaunchTemplatesProps.Jsii$Proxy that = (LaunchTemplatesProps.Jsii$Proxy) o;

            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.templateResourceGroupId != null ? this.templateResourceGroupId.equals(that.templateResourceGroupId) : that.templateResourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0;
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.templateResourceGroupId != null ? this.templateResourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
