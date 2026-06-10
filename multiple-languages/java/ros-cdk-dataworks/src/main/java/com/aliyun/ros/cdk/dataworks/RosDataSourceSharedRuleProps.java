package com.aliyun.ros.cdk.dataworks;

/**
 * Properties for defining a <code>RosDataSourceSharedRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:09:51.225Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.RosDataSourceSharedRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosDataSourceSharedRuleProps.Jsii$Proxy.class)
public interface RosDataSourceSharedRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataSourceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetProjectId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSharedUser() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDataSourceSharedRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDataSourceSharedRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDataSourceSharedRuleProps> {
        java.lang.Object dataSourceId;
        java.lang.Object envType;
        java.lang.Object targetProjectId;
        java.lang.Object sharedUser;

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getDataSourceId}
         * @param dataSourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceId(java.lang.Number dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getDataSourceId}
         * @param dataSourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceId(com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getEnvType}
         * @param envType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getTargetProjectId}
         * @param targetProjectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetProjectId(java.lang.Number targetProjectId) {
            this.targetProjectId = targetProjectId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getTargetProjectId}
         * @param targetProjectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetProjectId(com.aliyun.ros.cdk.core.IResolvable targetProjectId) {
            this.targetProjectId = targetProjectId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getSharedUser}
         * @param sharedUser the value to be set.
         * @return {@code this}
         */
        public Builder sharedUser(java.lang.String sharedUser) {
            this.sharedUser = sharedUser;
            return this;
        }

        /**
         * Sets the value of {@link RosDataSourceSharedRuleProps#getSharedUser}
         * @param sharedUser the value to be set.
         * @return {@code this}
         */
        public Builder sharedUser(com.aliyun.ros.cdk.core.IResolvable sharedUser) {
            this.sharedUser = sharedUser;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDataSourceSharedRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDataSourceSharedRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDataSourceSharedRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDataSourceSharedRuleProps {
        private final java.lang.Object dataSourceId;
        private final java.lang.Object envType;
        private final java.lang.Object targetProjectId;
        private final java.lang.Object sharedUser;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataSourceId = software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetProjectId = software.amazon.jsii.Kernel.get(this, "targetProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sharedUser = software.amazon.jsii.Kernel.get(this, "sharedUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataSourceId = java.util.Objects.requireNonNull(builder.dataSourceId, "dataSourceId is required");
            this.envType = java.util.Objects.requireNonNull(builder.envType, "envType is required");
            this.targetProjectId = java.util.Objects.requireNonNull(builder.targetProjectId, "targetProjectId is required");
            this.sharedUser = builder.sharedUser;
        }

        @Override
        public final java.lang.Object getDataSourceId() {
            return this.dataSourceId;
        }

        @Override
        public final java.lang.Object getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Object getTargetProjectId() {
            return this.targetProjectId;
        }

        @Override
        public final java.lang.Object getSharedUser() {
            return this.sharedUser;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataSourceId", om.valueToTree(this.getDataSourceId()));
            data.set("envType", om.valueToTree(this.getEnvType()));
            data.set("targetProjectId", om.valueToTree(this.getTargetProjectId()));
            if (this.getSharedUser() != null) {
                data.set("sharedUser", om.valueToTree(this.getSharedUser()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dataworks.RosDataSourceSharedRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDataSourceSharedRuleProps.Jsii$Proxy that = (RosDataSourceSharedRuleProps.Jsii$Proxy) o;

            if (!dataSourceId.equals(that.dataSourceId)) return false;
            if (!envType.equals(that.envType)) return false;
            if (!targetProjectId.equals(that.targetProjectId)) return false;
            return this.sharedUser != null ? this.sharedUser.equals(that.sharedUser) : that.sharedUser == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataSourceId.hashCode();
            result = 31 * result + (this.envType.hashCode());
            result = 31 * result + (this.targetProjectId.hashCode());
            result = 31 * result + (this.sharedUser != null ? this.sharedUser.hashCode() : 0);
            return result;
        }
    }
}
