package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>RosHealthCheckTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:26.496Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosHealthCheckTemplateProps")
@software.amazon.jsii.Jsii.Proxy(RosHealthCheckTemplateProps.Jsii$Proxy.class)
public interface RosHealthCheckTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTemplateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckCodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConnectPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHealthCheckTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHealthCheckTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHealthCheckTemplateProps> {
        java.lang.Object healthCheckTemplateName;
        java.lang.Object healthCheckCodes;
        java.lang.Object healthCheckConnectPort;
        java.lang.Object healthCheckHost;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckMethod;
        java.lang.Object healthCheckPath;
        java.lang.Object healthCheckProtocol;
        java.lang.Object healthCheckTimeout;
        java.lang.Object healthyThreshold;
        java.lang.Object unhealthyThreshold;

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(java.lang.String healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckTemplateName}
         * @param healthCheckTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckTemplateName(com.aliyun.ros.cdk.core.IResolvable healthCheckTemplateName) {
            this.healthCheckTemplateName = healthCheckTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckCodes(com.aliyun.ros.cdk.core.IResolvable healthCheckCodes) {
            this.healthCheckCodes = healthCheckCodes;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckCodes}
         * @param healthCheckCodes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckCodes(java.util.List<? extends java.lang.Object> healthCheckCodes) {
            this.healthCheckCodes = healthCheckCodes;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckConnectPort}
         * @param healthCheckConnectPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckConnectPort(java.lang.Number healthCheckConnectPort) {
            this.healthCheckConnectPort = healthCheckConnectPort;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckConnectPort}
         * @param healthCheckConnectPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckConnectPort(com.aliyun.ros.cdk.core.IResolvable healthCheckConnectPort) {
            this.healthCheckConnectPort = healthCheckConnectPort;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(java.lang.String healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckMethod}
         * @param healthCheckMethod the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckMethod}
         * @param healthCheckMethod the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPath(java.lang.String healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckPath}
         * @param healthCheckPath the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckProtocol}
         * @param healthCheckProtocol the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckTimeout}
         * @param healthCheckTimeout the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(java.lang.Number healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthCheckTimeout}
         * @param healthCheckTimeout the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthyThreshold}
         * @param healthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder healthyThreshold(java.lang.Number healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getHealthyThreshold}
         * @param healthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getUnhealthyThreshold}
         * @param unhealthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder unhealthyThreshold(java.lang.Number unhealthyThreshold) {
            this.unhealthyThreshold = unhealthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosHealthCheckTemplateProps#getUnhealthyThreshold}
         * @param unhealthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder unhealthyThreshold(com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
            this.unhealthyThreshold = unhealthyThreshold;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHealthCheckTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHealthCheckTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHealthCheckTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHealthCheckTemplateProps {
        private final java.lang.Object healthCheckTemplateName;
        private final java.lang.Object healthCheckCodes;
        private final java.lang.Object healthCheckConnectPort;
        private final java.lang.Object healthCheckHost;
        private final java.lang.Object healthCheckInterval;
        private final java.lang.Object healthCheckMethod;
        private final java.lang.Object healthCheckPath;
        private final java.lang.Object healthCheckProtocol;
        private final java.lang.Object healthCheckTimeout;
        private final java.lang.Object healthyThreshold;
        private final java.lang.Object unhealthyThreshold;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.healthCheckTemplateName = software.amazon.jsii.Kernel.get(this, "healthCheckTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckCodes = software.amazon.jsii.Kernel.get(this, "healthCheckCodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConnectPort = software.amazon.jsii.Kernel.get(this, "healthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckHost = software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckMethod = software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.healthCheckTemplateName = java.util.Objects.requireNonNull(builder.healthCheckTemplateName, "healthCheckTemplateName is required");
            this.healthCheckCodes = builder.healthCheckCodes;
            this.healthCheckConnectPort = builder.healthCheckConnectPort;
            this.healthCheckHost = builder.healthCheckHost;
            this.healthCheckInterval = builder.healthCheckInterval;
            this.healthCheckMethod = builder.healthCheckMethod;
            this.healthCheckPath = builder.healthCheckPath;
            this.healthCheckProtocol = builder.healthCheckProtocol;
            this.healthCheckTimeout = builder.healthCheckTimeout;
            this.healthyThreshold = builder.healthyThreshold;
            this.unhealthyThreshold = builder.unhealthyThreshold;
        }

        @Override
        public final java.lang.Object getHealthCheckTemplateName() {
            return this.healthCheckTemplateName;
        }

        @Override
        public final java.lang.Object getHealthCheckCodes() {
            return this.healthCheckCodes;
        }

        @Override
        public final java.lang.Object getHealthCheckConnectPort() {
            return this.healthCheckConnectPort;
        }

        @Override
        public final java.lang.Object getHealthCheckHost() {
            return this.healthCheckHost;
        }

        @Override
        public final java.lang.Object getHealthCheckInterval() {
            return this.healthCheckInterval;
        }

        @Override
        public final java.lang.Object getHealthCheckMethod() {
            return this.healthCheckMethod;
        }

        @Override
        public final java.lang.Object getHealthCheckPath() {
            return this.healthCheckPath;
        }

        @Override
        public final java.lang.Object getHealthCheckProtocol() {
            return this.healthCheckProtocol;
        }

        @Override
        public final java.lang.Object getHealthCheckTimeout() {
            return this.healthCheckTimeout;
        }

        @Override
        public final java.lang.Object getHealthyThreshold() {
            return this.healthyThreshold;
        }

        @Override
        public final java.lang.Object getUnhealthyThreshold() {
            return this.unhealthyThreshold;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("healthCheckTemplateName", om.valueToTree(this.getHealthCheckTemplateName()));
            if (this.getHealthCheckCodes() != null) {
                data.set("healthCheckCodes", om.valueToTree(this.getHealthCheckCodes()));
            }
            if (this.getHealthCheckConnectPort() != null) {
                data.set("healthCheckConnectPort", om.valueToTree(this.getHealthCheckConnectPort()));
            }
            if (this.getHealthCheckHost() != null) {
                data.set("healthCheckHost", om.valueToTree(this.getHealthCheckHost()));
            }
            if (this.getHealthCheckInterval() != null) {
                data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
            }
            if (this.getHealthCheckMethod() != null) {
                data.set("healthCheckMethod", om.valueToTree(this.getHealthCheckMethod()));
            }
            if (this.getHealthCheckPath() != null) {
                data.set("healthCheckPath", om.valueToTree(this.getHealthCheckPath()));
            }
            if (this.getHealthCheckProtocol() != null) {
                data.set("healthCheckProtocol", om.valueToTree(this.getHealthCheckProtocol()));
            }
            if (this.getHealthCheckTimeout() != null) {
                data.set("healthCheckTimeout", om.valueToTree(this.getHealthCheckTimeout()));
            }
            if (this.getHealthyThreshold() != null) {
                data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
            }
            if (this.getUnhealthyThreshold() != null) {
                data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosHealthCheckTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHealthCheckTemplateProps.Jsii$Proxy that = (RosHealthCheckTemplateProps.Jsii$Proxy) o;

            if (!healthCheckTemplateName.equals(that.healthCheckTemplateName)) return false;
            if (this.healthCheckCodes != null ? !this.healthCheckCodes.equals(that.healthCheckCodes) : that.healthCheckCodes != null) return false;
            if (this.healthCheckConnectPort != null ? !this.healthCheckConnectPort.equals(that.healthCheckConnectPort) : that.healthCheckConnectPort != null) return false;
            if (this.healthCheckHost != null ? !this.healthCheckHost.equals(that.healthCheckHost) : that.healthCheckHost != null) return false;
            if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
            if (this.healthCheckMethod != null ? !this.healthCheckMethod.equals(that.healthCheckMethod) : that.healthCheckMethod != null) return false;
            if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
            if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
            if (this.healthCheckTimeout != null ? !this.healthCheckTimeout.equals(that.healthCheckTimeout) : that.healthCheckTimeout != null) return false;
            if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
            return this.unhealthyThreshold != null ? this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckTemplateName.hashCode();
            result = 31 * result + (this.healthCheckCodes != null ? this.healthCheckCodes.hashCode() : 0);
            result = 31 * result + (this.healthCheckConnectPort != null ? this.healthCheckConnectPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckHost != null ? this.healthCheckHost.hashCode() : 0);
            result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
            result = 31 * result + (this.healthCheckMethod != null ? this.healthCheckMethod.hashCode() : 0);
            result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
            result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
            result = 31 * result + (this.healthCheckTimeout != null ? this.healthCheckTimeout.hashCode() : 0);
            result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
            result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
            return result;
        }
    }
}
