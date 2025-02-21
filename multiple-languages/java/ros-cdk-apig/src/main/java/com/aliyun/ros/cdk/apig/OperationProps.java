package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Operation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.702Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.OperationProps")
@software.amazon.jsii.Jsii.Proxy(OperationProps.Jsii$Proxy.class)
public interface OperationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property httpApiId: The HTTP API ID to which the interface belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiId();

    /**
     * Property method: The method of http protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMethod();

    /**
     * Property operationName: The name of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperationName();

    /**
     * Property path: The interface path of the operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPath();

    /**
     * Property description: The description of the operation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property mock: Mock configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMock() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OperationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OperationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OperationProps> {
        java.lang.Object httpApiId;
        java.lang.Object method;
        java.lang.Object operationName;
        java.lang.Object path;
        java.lang.Object description;
        java.lang.Object mock;

        /**
         * Sets the value of {@link OperationProps#getHttpApiId}
         * @param httpApiId Property httpApiId: The HTTP API ID to which the interface belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(java.lang.String httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getHttpApiId}
         * @param httpApiId Property httpApiId: The HTTP API ID to which the interface belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getMethod}
         * @param method Property method: The method of http protocol. This parameter is required.
         * @return {@code this}
         */
        public Builder method(java.lang.String method) {
            this.method = method;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getMethod}
         * @param method Property method: The method of http protocol. This parameter is required.
         * @return {@code this}
         */
        public Builder method(com.aliyun.ros.cdk.core.IResolvable method) {
            this.method = method;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getOperationName}
         * @param operationName Property operationName: The name of the operation. This parameter is required.
         * @return {@code this}
         */
        public Builder operationName(java.lang.String operationName) {
            this.operationName = operationName;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getOperationName}
         * @param operationName Property operationName: The name of the operation. This parameter is required.
         * @return {@code this}
         */
        public Builder operationName(com.aliyun.ros.cdk.core.IResolvable operationName) {
            this.operationName = operationName;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getPath}
         * @param path Property path: The interface path of the operation. This parameter is required.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getPath}
         * @param path Property path: The interface path of the operation. This parameter is required.
         * @return {@code this}
         */
        public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getDescription}
         * @param description Property description: The description of the operation.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getDescription}
         * @param description Property description: The description of the operation.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getMock}
         * @param mock Property mock: Mock configuration.
         * @return {@code this}
         */
        public Builder mock(com.aliyun.ros.cdk.core.IResolvable mock) {
            this.mock = mock;
            return this;
        }

        /**
         * Sets the value of {@link OperationProps#getMock}
         * @param mock Property mock: Mock configuration.
         * @return {@code this}
         */
        public Builder mock(com.aliyun.ros.cdk.apig.RosOperation.MockProperty mock) {
            this.mock = mock;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OperationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OperationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OperationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OperationProps {
        private final java.lang.Object httpApiId;
        private final java.lang.Object method;
        private final java.lang.Object operationName;
        private final java.lang.Object path;
        private final java.lang.Object description;
        private final java.lang.Object mock;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.httpApiId = software.amazon.jsii.Kernel.get(this, "httpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.method = software.amazon.jsii.Kernel.get(this, "method", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationName = software.amazon.jsii.Kernel.get(this, "operationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mock = software.amazon.jsii.Kernel.get(this, "mock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.httpApiId = java.util.Objects.requireNonNull(builder.httpApiId, "httpApiId is required");
            this.method = java.util.Objects.requireNonNull(builder.method, "method is required");
            this.operationName = java.util.Objects.requireNonNull(builder.operationName, "operationName is required");
            this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
            this.description = builder.description;
            this.mock = builder.mock;
        }

        @Override
        public final java.lang.Object getHttpApiId() {
            return this.httpApiId;
        }

        @Override
        public final java.lang.Object getMethod() {
            return this.method;
        }

        @Override
        public final java.lang.Object getOperationName() {
            return this.operationName;
        }

        @Override
        public final java.lang.Object getPath() {
            return this.path;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMock() {
            return this.mock;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("httpApiId", om.valueToTree(this.getHttpApiId()));
            data.set("method", om.valueToTree(this.getMethod()));
            data.set("operationName", om.valueToTree(this.getOperationName()));
            data.set("path", om.valueToTree(this.getPath()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMock() != null) {
                data.set("mock", om.valueToTree(this.getMock()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.OperationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OperationProps.Jsii$Proxy that = (OperationProps.Jsii$Proxy) o;

            if (!httpApiId.equals(that.httpApiId)) return false;
            if (!method.equals(that.method)) return false;
            if (!operationName.equals(that.operationName)) return false;
            if (!path.equals(that.path)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.mock != null ? this.mock.equals(that.mock) : that.mock == null;
        }

        @Override
        public final int hashCode() {
            int result = this.httpApiId.hashCode();
            result = 31 * result + (this.method.hashCode());
            result = 31 * result + (this.operationName.hashCode());
            result = 31 * result + (this.path.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.mock != null ? this.mock.hashCode() : 0);
            return result;
        }
    }
}
