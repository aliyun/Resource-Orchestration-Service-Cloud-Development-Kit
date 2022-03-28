package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::StageConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.461Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.StageConfigProps")
@software.amazon.jsii.Jsii.Proxy(StageConfigProps.Jsii$Proxy.class)
public interface StageConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupId: The id of the Group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property stageName: The name of the Stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * Property variables: Variables in the stage, key-value pairs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVariables();

    /**
     * @return a {@link Builder} of {@link StageConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StageConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StageConfigProps> {
        java.lang.Object groupId;
        java.lang.Object stageName;
        java.lang.Object variables;

        /**
         * Sets the value of {@link StageConfigProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link StageConfigProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link StageConfigProps#getStageName}
         * @param stageName Property stageName: The name of the Stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link StageConfigProps#getStageName}
         * @param stageName Property stageName: The name of the Stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link StageConfigProps#getVariables}
         * @param variables Property variables: Variables in the stage, key-value pairs. This parameter is required.
         * @return {@code this}
         */
        public Builder variables(com.aliyun.ros.cdk.core.IResolvable variables) {
            this.variables = variables;
            return this;
        }

        /**
         * Sets the value of {@link StageConfigProps#getVariables}
         * @param variables Property variables: Variables in the stage, key-value pairs. This parameter is required.
         * @return {@code this}
         */
        public Builder variables(java.util.Map<java.lang.String, ? extends java.lang.Object> variables) {
            this.variables = variables;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StageConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StageConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StageConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StageConfigProps {
        private final java.lang.Object groupId;
        private final java.lang.Object stageName;
        private final java.lang.Object variables;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.variables = software.amazon.jsii.Kernel.get(this, "variables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
            this.variables = java.util.Objects.requireNonNull(builder.variables, "variables is required");
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getStageName() {
            return this.stageName;
        }

        @Override
        public final java.lang.Object getVariables() {
            return this.variables;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            data.set("variables", om.valueToTree(this.getVariables()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.StageConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StageConfigProps.Jsii$Proxy that = (StageConfigProps.Jsii$Proxy) o;

            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            return this.variables.equals(that.variables);
        }

        @Override
        public final int hashCode() {
            int result = this.groupId.hashCode();
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.variables.hashCode());
            return result;
        }
    }
}
