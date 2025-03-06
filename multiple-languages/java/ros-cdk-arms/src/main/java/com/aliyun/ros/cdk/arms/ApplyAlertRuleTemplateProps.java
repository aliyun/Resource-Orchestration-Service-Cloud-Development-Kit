package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>ApplyAlertRuleTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps")
@software.amazon.jsii.Jsii.Proxy(ApplyAlertRuleTemplateProps.Jsii$Proxy.class)
public interface ApplyAlertRuleTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterIds: The IDs list of Prometheus Instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterIds() {
        return null;
    }

    /**
     * Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateIds() {
        return null;
    }

    /**
     * Property update: Whether to update created alert rules.
     * <p>
     * Default false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpdate() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplyAlertRuleTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplyAlertRuleTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplyAlertRuleTemplateProps> {
        java.lang.Object clusterIds;
        java.lang.Object templateIds;
        java.lang.Object update;

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getClusterIds}
         * @param clusterIds Property clusterIds: The IDs list of Prometheus Instances.
         * @return {@code this}
         */
        public Builder clusterIds(com.aliyun.ros.cdk.core.IResolvable clusterIds) {
            this.clusterIds = clusterIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getClusterIds}
         * @param clusterIds Property clusterIds: The IDs list of Prometheus Instances.
         * @return {@code this}
         */
        public Builder clusterIds(java.util.List<? extends java.lang.Object> clusterIds) {
            this.clusterIds = clusterIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getTemplateIds}
         * @param templateIds Property templateIds: The IDs list of Prometheus alert rule templates.
         * @return {@code this}
         */
        public Builder templateIds(com.aliyun.ros.cdk.core.IResolvable templateIds) {
            this.templateIds = templateIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getTemplateIds}
         * @param templateIds Property templateIds: The IDs list of Prometheus alert rule templates.
         * @return {@code this}
         */
        public Builder templateIds(java.util.List<? extends java.lang.Object> templateIds) {
            this.templateIds = templateIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getUpdate}
         * @param update Property update: Whether to update created alert rules.
         *               Default false.
         * @return {@code this}
         */
        public Builder update(java.lang.Boolean update) {
            this.update = update;
            return this;
        }

        /**
         * Sets the value of {@link ApplyAlertRuleTemplateProps#getUpdate}
         * @param update Property update: Whether to update created alert rules.
         *               Default false.
         * @return {@code this}
         */
        public Builder update(com.aliyun.ros.cdk.core.IResolvable update) {
            this.update = update;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplyAlertRuleTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplyAlertRuleTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplyAlertRuleTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplyAlertRuleTemplateProps {
        private final java.lang.Object clusterIds;
        private final java.lang.Object templateIds;
        private final java.lang.Object update;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterIds = software.amazon.jsii.Kernel.get(this, "clusterIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateIds = software.amazon.jsii.Kernel.get(this, "templateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.update = software.amazon.jsii.Kernel.get(this, "update", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterIds = builder.clusterIds;
            this.templateIds = builder.templateIds;
            this.update = builder.update;
        }

        @Override
        public final java.lang.Object getClusterIds() {
            return this.clusterIds;
        }

        @Override
        public final java.lang.Object getTemplateIds() {
            return this.templateIds;
        }

        @Override
        public final java.lang.Object getUpdate() {
            return this.update;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getClusterIds() != null) {
                data.set("clusterIds", om.valueToTree(this.getClusterIds()));
            }
            if (this.getTemplateIds() != null) {
                data.set("templateIds", om.valueToTree(this.getTemplateIds()));
            }
            if (this.getUpdate() != null) {
                data.set("update", om.valueToTree(this.getUpdate()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplyAlertRuleTemplateProps.Jsii$Proxy that = (ApplyAlertRuleTemplateProps.Jsii$Proxy) o;

            if (this.clusterIds != null ? !this.clusterIds.equals(that.clusterIds) : that.clusterIds != null) return false;
            if (this.templateIds != null ? !this.templateIds.equals(that.templateIds) : that.templateIds != null) return false;
            return this.update != null ? this.update.equals(that.update) : that.update == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterIds != null ? this.clusterIds.hashCode() : 0;
            result = 31 * result + (this.templateIds != null ? this.templateIds.hashCode() : 0);
            result = 31 * result + (this.update != null ? this.update.hashCode() : 0);
            return result;
        }
    }
}
