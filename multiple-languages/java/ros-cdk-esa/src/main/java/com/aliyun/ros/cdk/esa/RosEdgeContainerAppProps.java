package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosEdgeContainerApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.631Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosEdgeContainerAppProps")
@software.amazon.jsii.Jsii.Proxy(RosEdgeContainerAppProps.Jsii$Proxy.class)
public interface RosEdgeContainerAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEdgeContainerAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServicePort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetPort();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckFailTimes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHttpCode() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSuccTimes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUri() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemarks() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEdgeContainerAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEdgeContainerAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEdgeContainerAppProps> {
        java.lang.Object edgeContainerAppName;
        java.lang.Object servicePort;
        java.lang.Object targetPort;
        java.lang.Object healthCheckFailTimes;
        java.lang.Object healthCheckHost;
        java.lang.Object healthCheckHttpCode;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckMethod;
        java.lang.Object healthCheckPort;
        java.lang.Object healthCheckSuccTimes;
        java.lang.Object healthCheckTimeout;
        java.lang.Object healthCheckType;
        java.lang.Object healthCheckUri;
        java.lang.Object remarks;

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getEdgeContainerAppName}
         * @param edgeContainerAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder edgeContainerAppName(java.lang.String edgeContainerAppName) {
            this.edgeContainerAppName = edgeContainerAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getEdgeContainerAppName}
         * @param edgeContainerAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder edgeContainerAppName(com.aliyun.ros.cdk.core.IResolvable edgeContainerAppName) {
            this.edgeContainerAppName = edgeContainerAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getServicePort}
         * @param servicePort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePort(java.lang.Number servicePort) {
            this.servicePort = servicePort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getServicePort}
         * @param servicePort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePort(com.aliyun.ros.cdk.core.IResolvable servicePort) {
            this.servicePort = servicePort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getTargetPort}
         * @param targetPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPort(java.lang.Number targetPort) {
            this.targetPort = targetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getTargetPort}
         * @param targetPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPort(com.aliyun.ros.cdk.core.IResolvable targetPort) {
            this.targetPort = targetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckFailTimes}
         * @param healthCheckFailTimes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckFailTimes(java.lang.Number healthCheckFailTimes) {
            this.healthCheckFailTimes = healthCheckFailTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckFailTimes}
         * @param healthCheckFailTimes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckFailTimes(com.aliyun.ros.cdk.core.IResolvable healthCheckFailTimes) {
            this.healthCheckFailTimes = healthCheckFailTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(java.lang.String healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckHttpCode}
         * @param healthCheckHttpCode the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHttpCode(java.lang.String healthCheckHttpCode) {
            this.healthCheckHttpCode = healthCheckHttpCode;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckHttpCode}
         * @param healthCheckHttpCode the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHttpCode(com.aliyun.ros.cdk.core.IResolvable healthCheckHttpCode) {
            this.healthCheckHttpCode = healthCheckHttpCode;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckMethod}
         * @param healthCheckMethod the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckMethod}
         * @param healthCheckMethod the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
            this.healthCheckMethod = healthCheckMethod;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckPort}
         * @param healthCheckPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPort(java.lang.Number healthCheckPort) {
            this.healthCheckPort = healthCheckPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckPort}
         * @param healthCheckPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPort(com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
            this.healthCheckPort = healthCheckPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckSuccTimes}
         * @param healthCheckSuccTimes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckSuccTimes(java.lang.Number healthCheckSuccTimes) {
            this.healthCheckSuccTimes = healthCheckSuccTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckSuccTimes}
         * @param healthCheckSuccTimes the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckSuccTimes(com.aliyun.ros.cdk.core.IResolvable healthCheckSuccTimes) {
            this.healthCheckSuccTimes = healthCheckSuccTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckTimeout}
         * @param healthCheckTimeout the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(java.lang.Number healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckTimeout}
         * @param healthCheckTimeout the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckTimeout(com.aliyun.ros.cdk.core.IResolvable healthCheckTimeout) {
            this.healthCheckTimeout = healthCheckTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckType}
         * @param healthCheckType the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckType(java.lang.String healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckType}
         * @param healthCheckType the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckType(com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckUri}
         * @param healthCheckUri the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckUri(java.lang.String healthCheckUri) {
            this.healthCheckUri = healthCheckUri;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getHealthCheckUri}
         * @param healthCheckUri the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckUri(com.aliyun.ros.cdk.core.IResolvable healthCheckUri) {
            this.healthCheckUri = healthCheckUri;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getRemarks}
         * @param remarks the value to be set.
         * @return {@code this}
         */
        public Builder remarks(java.lang.String remarks) {
            this.remarks = remarks;
            return this;
        }

        /**
         * Sets the value of {@link RosEdgeContainerAppProps#getRemarks}
         * @param remarks the value to be set.
         * @return {@code this}
         */
        public Builder remarks(com.aliyun.ros.cdk.core.IResolvable remarks) {
            this.remarks = remarks;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEdgeContainerAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEdgeContainerAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEdgeContainerAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEdgeContainerAppProps {
        private final java.lang.Object edgeContainerAppName;
        private final java.lang.Object servicePort;
        private final java.lang.Object targetPort;
        private final java.lang.Object healthCheckFailTimes;
        private final java.lang.Object healthCheckHost;
        private final java.lang.Object healthCheckHttpCode;
        private final java.lang.Object healthCheckInterval;
        private final java.lang.Object healthCheckMethod;
        private final java.lang.Object healthCheckPort;
        private final java.lang.Object healthCheckSuccTimes;
        private final java.lang.Object healthCheckTimeout;
        private final java.lang.Object healthCheckType;
        private final java.lang.Object healthCheckUri;
        private final java.lang.Object remarks;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.edgeContainerAppName = software.amazon.jsii.Kernel.get(this, "edgeContainerAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servicePort = software.amazon.jsii.Kernel.get(this, "servicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPort = software.amazon.jsii.Kernel.get(this, "targetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckFailTimes = software.amazon.jsii.Kernel.get(this, "healthCheckFailTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckHost = software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckHttpCode = software.amazon.jsii.Kernel.get(this, "healthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckMethod = software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPort = software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckSuccTimes = software.amazon.jsii.Kernel.get(this, "healthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTimeout = software.amazon.jsii.Kernel.get(this, "healthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckUri = software.amazon.jsii.Kernel.get(this, "healthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remarks = software.amazon.jsii.Kernel.get(this, "remarks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.edgeContainerAppName = java.util.Objects.requireNonNull(builder.edgeContainerAppName, "edgeContainerAppName is required");
            this.servicePort = java.util.Objects.requireNonNull(builder.servicePort, "servicePort is required");
            this.targetPort = java.util.Objects.requireNonNull(builder.targetPort, "targetPort is required");
            this.healthCheckFailTimes = builder.healthCheckFailTimes;
            this.healthCheckHost = builder.healthCheckHost;
            this.healthCheckHttpCode = builder.healthCheckHttpCode;
            this.healthCheckInterval = builder.healthCheckInterval;
            this.healthCheckMethod = builder.healthCheckMethod;
            this.healthCheckPort = builder.healthCheckPort;
            this.healthCheckSuccTimes = builder.healthCheckSuccTimes;
            this.healthCheckTimeout = builder.healthCheckTimeout;
            this.healthCheckType = builder.healthCheckType;
            this.healthCheckUri = builder.healthCheckUri;
            this.remarks = builder.remarks;
        }

        @Override
        public final java.lang.Object getEdgeContainerAppName() {
            return this.edgeContainerAppName;
        }

        @Override
        public final java.lang.Object getServicePort() {
            return this.servicePort;
        }

        @Override
        public final java.lang.Object getTargetPort() {
            return this.targetPort;
        }

        @Override
        public final java.lang.Object getHealthCheckFailTimes() {
            return this.healthCheckFailTimes;
        }

        @Override
        public final java.lang.Object getHealthCheckHost() {
            return this.healthCheckHost;
        }

        @Override
        public final java.lang.Object getHealthCheckHttpCode() {
            return this.healthCheckHttpCode;
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
        public final java.lang.Object getHealthCheckPort() {
            return this.healthCheckPort;
        }

        @Override
        public final java.lang.Object getHealthCheckSuccTimes() {
            return this.healthCheckSuccTimes;
        }

        @Override
        public final java.lang.Object getHealthCheckTimeout() {
            return this.healthCheckTimeout;
        }

        @Override
        public final java.lang.Object getHealthCheckType() {
            return this.healthCheckType;
        }

        @Override
        public final java.lang.Object getHealthCheckUri() {
            return this.healthCheckUri;
        }

        @Override
        public final java.lang.Object getRemarks() {
            return this.remarks;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("edgeContainerAppName", om.valueToTree(this.getEdgeContainerAppName()));
            data.set("servicePort", om.valueToTree(this.getServicePort()));
            data.set("targetPort", om.valueToTree(this.getTargetPort()));
            if (this.getHealthCheckFailTimes() != null) {
                data.set("healthCheckFailTimes", om.valueToTree(this.getHealthCheckFailTimes()));
            }
            if (this.getHealthCheckHost() != null) {
                data.set("healthCheckHost", om.valueToTree(this.getHealthCheckHost()));
            }
            if (this.getHealthCheckHttpCode() != null) {
                data.set("healthCheckHttpCode", om.valueToTree(this.getHealthCheckHttpCode()));
            }
            if (this.getHealthCheckInterval() != null) {
                data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
            }
            if (this.getHealthCheckMethod() != null) {
                data.set("healthCheckMethod", om.valueToTree(this.getHealthCheckMethod()));
            }
            if (this.getHealthCheckPort() != null) {
                data.set("healthCheckPort", om.valueToTree(this.getHealthCheckPort()));
            }
            if (this.getHealthCheckSuccTimes() != null) {
                data.set("healthCheckSuccTimes", om.valueToTree(this.getHealthCheckSuccTimes()));
            }
            if (this.getHealthCheckTimeout() != null) {
                data.set("healthCheckTimeout", om.valueToTree(this.getHealthCheckTimeout()));
            }
            if (this.getHealthCheckType() != null) {
                data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
            }
            if (this.getHealthCheckUri() != null) {
                data.set("healthCheckUri", om.valueToTree(this.getHealthCheckUri()));
            }
            if (this.getRemarks() != null) {
                data.set("remarks", om.valueToTree(this.getRemarks()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosEdgeContainerAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEdgeContainerAppProps.Jsii$Proxy that = (RosEdgeContainerAppProps.Jsii$Proxy) o;

            if (!edgeContainerAppName.equals(that.edgeContainerAppName)) return false;
            if (!servicePort.equals(that.servicePort)) return false;
            if (!targetPort.equals(that.targetPort)) return false;
            if (this.healthCheckFailTimes != null ? !this.healthCheckFailTimes.equals(that.healthCheckFailTimes) : that.healthCheckFailTimes != null) return false;
            if (this.healthCheckHost != null ? !this.healthCheckHost.equals(that.healthCheckHost) : that.healthCheckHost != null) return false;
            if (this.healthCheckHttpCode != null ? !this.healthCheckHttpCode.equals(that.healthCheckHttpCode) : that.healthCheckHttpCode != null) return false;
            if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
            if (this.healthCheckMethod != null ? !this.healthCheckMethod.equals(that.healthCheckMethod) : that.healthCheckMethod != null) return false;
            if (this.healthCheckPort != null ? !this.healthCheckPort.equals(that.healthCheckPort) : that.healthCheckPort != null) return false;
            if (this.healthCheckSuccTimes != null ? !this.healthCheckSuccTimes.equals(that.healthCheckSuccTimes) : that.healthCheckSuccTimes != null) return false;
            if (this.healthCheckTimeout != null ? !this.healthCheckTimeout.equals(that.healthCheckTimeout) : that.healthCheckTimeout != null) return false;
            if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
            if (this.healthCheckUri != null ? !this.healthCheckUri.equals(that.healthCheckUri) : that.healthCheckUri != null) return false;
            return this.remarks != null ? this.remarks.equals(that.remarks) : that.remarks == null;
        }

        @Override
        public final int hashCode() {
            int result = this.edgeContainerAppName.hashCode();
            result = 31 * result + (this.servicePort.hashCode());
            result = 31 * result + (this.targetPort.hashCode());
            result = 31 * result + (this.healthCheckFailTimes != null ? this.healthCheckFailTimes.hashCode() : 0);
            result = 31 * result + (this.healthCheckHost != null ? this.healthCheckHost.hashCode() : 0);
            result = 31 * result + (this.healthCheckHttpCode != null ? this.healthCheckHttpCode.hashCode() : 0);
            result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
            result = 31 * result + (this.healthCheckMethod != null ? this.healthCheckMethod.hashCode() : 0);
            result = 31 * result + (this.healthCheckPort != null ? this.healthCheckPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckSuccTimes != null ? this.healthCheckSuccTimes.hashCode() : 0);
            result = 31 * result + (this.healthCheckTimeout != null ? this.healthCheckTimeout.hashCode() : 0);
            result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
            result = 31 * result + (this.healthCheckUri != null ? this.healthCheckUri.hashCode() : 0);
            result = 31 * result + (this.remarks != null ? this.remarks.hashCode() : 0);
            return result;
        }
    }
}
