package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a <code>RosFunctionInvoker</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:12.240Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosFunctionInvokerProps")
@software.amazon.jsii.Jsii.Proxy(RosFunctionInvokerProps.Jsii$Proxy.class)
public interface RosFunctionInvokerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAsync() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckError() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEvent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecuteVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFunctionInvokerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFunctionInvokerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFunctionInvokerProps> {
        java.lang.Object functionName;
        java.lang.Object serviceName;
        java.lang.Object async;
        java.lang.Object checkError;
        java.lang.Object event;
        java.lang.Object executeVersion;
        java.lang.Object qualifier;
        java.lang.Object serviceRegionId;

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getAsync}
         * @param async the value to be set.
         * @return {@code this}
         */
        public Builder async(java.lang.Boolean async) {
            this.async = async;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getAsync}
         * @param async the value to be set.
         * @return {@code this}
         */
        public Builder async(com.aliyun.ros.cdk.core.IResolvable async) {
            this.async = async;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getCheckError}
         * @param checkError the value to be set.
         * @return {@code this}
         */
        public Builder checkError(java.lang.Boolean checkError) {
            this.checkError = checkError;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getCheckError}
         * @param checkError the value to be set.
         * @return {@code this}
         */
        public Builder checkError(com.aliyun.ros.cdk.core.IResolvable checkError) {
            this.checkError = checkError;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getEvent}
         * @param event the value to be set.
         * @return {@code this}
         */
        public Builder event(java.lang.String event) {
            this.event = event;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getEvent}
         * @param event the value to be set.
         * @return {@code this}
         */
        public Builder event(com.aliyun.ros.cdk.core.IResolvable event) {
            this.event = event;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getExecuteVersion}
         * @param executeVersion the value to be set.
         * @return {@code this}
         */
        public Builder executeVersion(java.lang.Number executeVersion) {
            this.executeVersion = executeVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getExecuteVersion}
         * @param executeVersion the value to be set.
         * @return {@code this}
         */
        public Builder executeVersion(com.aliyun.ros.cdk.core.IResolvable executeVersion) {
            this.executeVersion = executeVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getQualifier}
         * @param qualifier the value to be set.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getQualifier}
         * @param qualifier the value to be set.
         * @return {@code this}
         */
        public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getServiceRegionId}
         * @param serviceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder serviceRegionId(java.lang.String serviceRegionId) {
            this.serviceRegionId = serviceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosFunctionInvokerProps#getServiceRegionId}
         * @param serviceRegionId the value to be set.
         * @return {@code this}
         */
        public Builder serviceRegionId(com.aliyun.ros.cdk.core.IResolvable serviceRegionId) {
            this.serviceRegionId = serviceRegionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFunctionInvokerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFunctionInvokerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFunctionInvokerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFunctionInvokerProps {
        private final java.lang.Object functionName;
        private final java.lang.Object serviceName;
        private final java.lang.Object async;
        private final java.lang.Object checkError;
        private final java.lang.Object event;
        private final java.lang.Object executeVersion;
        private final java.lang.Object qualifier;
        private final java.lang.Object serviceRegionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.async = software.amazon.jsii.Kernel.get(this, "async", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkError = software.amazon.jsii.Kernel.get(this, "checkError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.event = software.amazon.jsii.Kernel.get(this, "event", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executeVersion = software.amazon.jsii.Kernel.get(this, "executeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceRegionId = software.amazon.jsii.Kernel.get(this, "serviceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.async = builder.async;
            this.checkError = builder.checkError;
            this.event = builder.event;
            this.executeVersion = builder.executeVersion;
            this.qualifier = builder.qualifier;
            this.serviceRegionId = builder.serviceRegionId;
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getAsync() {
            return this.async;
        }

        @Override
        public final java.lang.Object getCheckError() {
            return this.checkError;
        }

        @Override
        public final java.lang.Object getEvent() {
            return this.event;
        }

        @Override
        public final java.lang.Object getExecuteVersion() {
            return this.executeVersion;
        }

        @Override
        public final java.lang.Object getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.Object getServiceRegionId() {
            return this.serviceRegionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getAsync() != null) {
                data.set("async", om.valueToTree(this.getAsync()));
            }
            if (this.getCheckError() != null) {
                data.set("checkError", om.valueToTree(this.getCheckError()));
            }
            if (this.getEvent() != null) {
                data.set("event", om.valueToTree(this.getEvent()));
            }
            if (this.getExecuteVersion() != null) {
                data.set("executeVersion", om.valueToTree(this.getExecuteVersion()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }
            if (this.getServiceRegionId() != null) {
                data.set("serviceRegionId", om.valueToTree(this.getServiceRegionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosFunctionInvokerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFunctionInvokerProps.Jsii$Proxy that = (RosFunctionInvokerProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            if (this.async != null ? !this.async.equals(that.async) : that.async != null) return false;
            if (this.checkError != null ? !this.checkError.equals(that.checkError) : that.checkError != null) return false;
            if (this.event != null ? !this.event.equals(that.event) : that.event != null) return false;
            if (this.executeVersion != null ? !this.executeVersion.equals(that.executeVersion) : that.executeVersion != null) return false;
            if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
            return this.serviceRegionId != null ? this.serviceRegionId.equals(that.serviceRegionId) : that.serviceRegionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.async != null ? this.async.hashCode() : 0);
            result = 31 * result + (this.checkError != null ? this.checkError.hashCode() : 0);
            result = 31 * result + (this.event != null ? this.event.hashCode() : 0);
            result = 31 * result + (this.executeVersion != null ? this.executeVersion.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            result = 31 * result + (this.serviceRegionId != null ? this.serviceRegionId.hashCode() : 0);
            return result;
        }
    }
}
