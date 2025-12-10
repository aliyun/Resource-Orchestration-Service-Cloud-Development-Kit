package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosApplicationGroupDeployment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.535Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosApplicationGroupDeploymentProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationGroupDeploymentProps.Jsii$Proxy.class)
public interface RosApplicationGroupDeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRevisionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationGroupDeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationGroupDeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationGroupDeploymentProps> {
        java.lang.Object applicationName;
        java.lang.Object name;
        java.lang.Object deployParameters;
        java.lang.Object revisionId;

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getDeployParameters}
         * @param deployParameters the value to be set.
         * @return {@code this}
         */
        public Builder deployParameters(java.lang.String deployParameters) {
            this.deployParameters = deployParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getDeployParameters}
         * @param deployParameters the value to be set.
         * @return {@code this}
         */
        public Builder deployParameters(com.aliyun.ros.cdk.core.IResolvable deployParameters) {
            this.deployParameters = deployParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getRevisionId}
         * @param revisionId the value to be set.
         * @return {@code this}
         */
        public Builder revisionId(java.lang.String revisionId) {
            this.revisionId = revisionId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationGroupDeploymentProps#getRevisionId}
         * @param revisionId the value to be set.
         * @return {@code this}
         */
        public Builder revisionId(com.aliyun.ros.cdk.core.IResolvable revisionId) {
            this.revisionId = revisionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationGroupDeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationGroupDeploymentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationGroupDeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationGroupDeploymentProps {
        private final java.lang.Object applicationName;
        private final java.lang.Object name;
        private final java.lang.Object deployParameters;
        private final java.lang.Object revisionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployParameters = software.amazon.jsii.Kernel.get(this, "deployParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.revisionId = software.amazon.jsii.Kernel.get(this, "revisionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.deployParameters = builder.deployParameters;
            this.revisionId = builder.revisionId;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDeployParameters() {
            return this.deployParameters;
        }

        @Override
        public final java.lang.Object getRevisionId() {
            return this.revisionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applicationName", om.valueToTree(this.getApplicationName()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getDeployParameters() != null) {
                data.set("deployParameters", om.valueToTree(this.getDeployParameters()));
            }
            if (this.getRevisionId() != null) {
                data.set("revisionId", om.valueToTree(this.getRevisionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosApplicationGroupDeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationGroupDeploymentProps.Jsii$Proxy that = (RosApplicationGroupDeploymentProps.Jsii$Proxy) o;

            if (!applicationName.equals(that.applicationName)) return false;
            if (!name.equals(that.name)) return false;
            if (this.deployParameters != null ? !this.deployParameters.equals(that.deployParameters) : that.deployParameters != null) return false;
            return this.revisionId != null ? this.revisionId.equals(that.revisionId) : that.revisionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applicationName.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.deployParameters != null ? this.deployParameters.hashCode() : 0);
            result = 31 * result + (this.revisionId != null ? this.revisionId.hashCode() : 0);
            return result;
        }
    }
}
