package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::Service`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.963Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosServiceProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceProps.Jsii$Proxy.class)
public interface RosServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRole() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceProps> {
        private java.lang.String serviceName;
        private java.lang.Object deletionForce;
        private java.lang.String description;
        private java.lang.Object internetAccess;
        private java.lang.Object logConfig;
        private java.lang.Object nasConfig;
        private java.lang.String role;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private java.lang.Object vpcConfig;

        /**
         * Sets the value of {@link RosServiceProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getInternetAccess}
         * @param internetAccess the value to be set.
         * @return {@code this}
         */
        public Builder internetAccess(java.lang.Boolean internetAccess) {
            this.internetAccess = internetAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getInternetAccess}
         * @param internetAccess the value to be set.
         * @return {@code this}
         */
        public Builder internetAccess(com.aliyun.ros.cdk.core.IResolvable internetAccess) {
            this.internetAccess = internetAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.fc.RosService.LogConfigProperty logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getNasConfig}
         * @param nasConfig the value to be set.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.core.IResolvable nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getNasConfig}
         * @param nasConfig the value to be set.
         * @return {@code this}
         */
        public Builder nasConfig(com.aliyun.ros.cdk.fc.RosService.NasConfigProperty nasConfig) {
            this.nasConfig = nasConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getRole}
         * @param role the value to be set.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getVpcConfig}
         * @param vpcConfig the value to be set.
         * @return {@code this}
         */
        public Builder vpcConfig(com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
            this.vpcConfig = vpcConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceProps#getVpcConfig}
         * @param vpcConfig the value to be set.
         * @return {@code this}
         */
        public Builder vpcConfig(com.aliyun.ros.cdk.fc.RosService.VpcConfigProperty vpcConfig) {
            this.vpcConfig = vpcConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceProps build() {
            return new Jsii$Proxy(serviceName, deletionForce, description, internetAccess, logConfig, nasConfig, role, tags, vpcConfig);
        }
    }

    /**
     * An implementation for {@link RosServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceProps {
        private final java.lang.String serviceName;
        private final java.lang.Object deletionForce;
        private final java.lang.String description;
        private final java.lang.Object internetAccess;
        private final java.lang.Object logConfig;
        private final java.lang.Object nasConfig;
        private final java.lang.String role;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private final java.lang.Object vpcConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetAccess = software.amazon.jsii.Kernel.get(this, "internetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfig = software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasConfig = software.amazon.jsii.Kernel.get(this, "nasConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
            this.vpcConfig = software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String serviceName, final java.lang.Object deletionForce, final java.lang.String description, final java.lang.Object internetAccess, final java.lang.Object logConfig, final java.lang.Object nasConfig, final java.lang.String role, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags, final java.lang.Object vpcConfig) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceName = java.util.Objects.requireNonNull(serviceName, "serviceName is required");
            this.deletionForce = deletionForce;
            this.description = description;
            this.internetAccess = internetAccess;
            this.logConfig = logConfig;
            this.nasConfig = nasConfig;
            this.role = role;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            this.vpcConfig = vpcConfig;
        }

        @Override
        public final java.lang.String getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInternetAccess() {
            return this.internetAccess;
        }

        @Override
        public final java.lang.Object getLogConfig() {
            return this.logConfig;
        }

        @Override
        public final java.lang.Object getNasConfig() {
            return this.nasConfig;
        }

        @Override
        public final java.lang.String getRole() {
            return this.role;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcConfig() {
            return this.vpcConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInternetAccess() != null) {
                data.set("internetAccess", om.valueToTree(this.getInternetAccess()));
            }
            if (this.getLogConfig() != null) {
                data.set("logConfig", om.valueToTree(this.getLogConfig()));
            }
            if (this.getNasConfig() != null) {
                data.set("nasConfig", om.valueToTree(this.getNasConfig()));
            }
            if (this.getRole() != null) {
                data.set("role", om.valueToTree(this.getRole()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcConfig() != null) {
                data.set("vpcConfig", om.valueToTree(this.getVpcConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceProps.Jsii$Proxy that = (RosServiceProps.Jsii$Proxy) o;

            if (!serviceName.equals(that.serviceName)) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.internetAccess != null ? !this.internetAccess.equals(that.internetAccess) : that.internetAccess != null) return false;
            if (this.logConfig != null ? !this.logConfig.equals(that.logConfig) : that.logConfig != null) return false;
            if (this.nasConfig != null ? !this.nasConfig.equals(that.nasConfig) : that.nasConfig != null) return false;
            if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcConfig != null ? this.vpcConfig.equals(that.vpcConfig) : that.vpcConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceName.hashCode();
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.internetAccess != null ? this.internetAccess.hashCode() : 0);
            result = 31 * result + (this.logConfig != null ? this.logConfig.hashCode() : 0);
            result = 31 * result + (this.nasConfig != null ? this.nasConfig.hashCode() : 0);
            result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcConfig != null ? this.vpcConfig.hashCode() : 0);
            return result;
        }
    }
}
