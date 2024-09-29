package com.aliyun.ros.cdk.acm.datasource;

/**
 * Properties for defining a <code>RosConfigurations</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.859Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acm.$Module.class, fqn = "@alicloud/ros-cdk-acm.datasource.RosConfigurationsProps")
@software.amazon.jsii.Jsii.Proxy(RosConfigurationsProps.Jsii$Proxy.class)
public interface RosConfigurationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosConfigurationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosConfigurationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosConfigurationsProps> {
        java.lang.Object namespaceId;
        java.lang.Object appName;
        java.lang.Object dataId;
        java.lang.Object group;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosConfigurationsProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getAppName}
         * @param appName the value to be set.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getAppName}
         * @param appName the value to be set.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getDataId}
         * @param dataId the value to be set.
         * @return {@code this}
         */
        public Builder dataId(java.lang.String dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getDataId}
         * @param dataId the value to be set.
         * @return {@code this}
         */
        public Builder dataId(com.aliyun.ros.cdk.core.IResolvable dataId) {
            this.dataId = dataId;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getGroup}
         * @param group the value to be set.
         * @return {@code this}
         */
        public Builder group(java.lang.String group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getGroup}
         * @param group the value to be set.
         * @return {@code this}
         */
        public Builder group(com.aliyun.ros.cdk.core.IResolvable group) {
            this.group = group;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosConfigurationsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosConfigurationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosConfigurationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosConfigurationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosConfigurationsProps {
        private final java.lang.Object namespaceId;
        private final java.lang.Object appName;
        private final java.lang.Object dataId;
        private final java.lang.Object group;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataId = software.amazon.jsii.Kernel.get(this, "dataId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.group = software.amazon.jsii.Kernel.get(this, "group", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.appName = builder.appName;
            this.dataId = builder.dataId;
            this.group = builder.group;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getDataId() {
            return this.dataId;
        }

        @Override
        public final java.lang.Object getGroup() {
            return this.group;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            if (this.getAppName() != null) {
                data.set("appName", om.valueToTree(this.getAppName()));
            }
            if (this.getDataId() != null) {
                data.set("dataId", om.valueToTree(this.getDataId()));
            }
            if (this.getGroup() != null) {
                data.set("group", om.valueToTree(this.getGroup()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acm.datasource.RosConfigurationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosConfigurationsProps.Jsii$Proxy that = (RosConfigurationsProps.Jsii$Proxy) o;

            if (!namespaceId.equals(that.namespaceId)) return false;
            if (this.appName != null ? !this.appName.equals(that.appName) : that.appName != null) return false;
            if (this.dataId != null ? !this.dataId.equals(that.dataId) : that.dataId != null) return false;
            if (this.group != null ? !this.group.equals(that.group) : that.group != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespaceId.hashCode();
            result = 31 * result + (this.appName != null ? this.appName.hashCode() : 0);
            result = 31 * result + (this.dataId != null ? this.dataId.hashCode() : 0);
            result = 31 * result + (this.group != null ? this.group.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
