package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosXTraceApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.022Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosXTraceAppProps")
@software.amazon.jsii.Jsii.Proxy(RosXTraceAppProps.Jsii$Proxy.class)
public interface RosXTraceAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getXTraceAppName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosXTraceAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosXTraceAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosXTraceAppProps> {
        java.lang.Object xTraceAppName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty> tags;

        /**
         * Sets the value of {@link RosXTraceAppProps#getXTraceAppName}
         * @param xTraceAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder xTraceAppName(java.lang.String xTraceAppName) {
            this.xTraceAppName = xTraceAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getXTraceAppName}
         * @param xTraceAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder xTraceAppName(com.aliyun.ros.cdk.core.IResolvable xTraceAppName) {
            this.xTraceAppName = xTraceAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosXTraceAppProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosXTraceAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosXTraceAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosXTraceAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosXTraceAppProps {
        private final java.lang.Object xTraceAppName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.xTraceAppName = software.amazon.jsii.Kernel.get(this, "xTraceAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.xTraceAppName = java.util.Objects.requireNonNull(builder.xTraceAppName, "xTraceAppName is required");
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getXTraceAppName() {
            return this.xTraceAppName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.arms.RosXTraceApp.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("xTraceAppName", om.valueToTree(this.getXTraceAppName()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosXTraceAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosXTraceAppProps.Jsii$Proxy that = (RosXTraceAppProps.Jsii$Proxy) o;

            if (!xTraceAppName.equals(that.xTraceAppName)) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.xTraceAppName.hashCode();
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
