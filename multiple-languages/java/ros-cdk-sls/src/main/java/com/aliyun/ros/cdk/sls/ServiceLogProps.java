package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>ServiceLog</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.979Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.ServiceLogProps")
@software.amazon.jsii.Jsii.Proxy(ServiceLogProps.Jsii$Proxy.class)
public interface ServiceLogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property logStorageLocation: The location of the service log.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogStorageLocation();

    /**
     * Property projectName: The name of the project that needs to be activated.
     * <p>
     * If it has been activated, it will be reactivated again.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property serviceLogTypes: Types of service log that needs to be activated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceLogTypes();

    /**
     * @return a {@link Builder} of {@link ServiceLogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceLogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceLogProps> {
        java.lang.Object logStorageLocation;
        java.lang.Object projectName;
        java.lang.Object serviceLogTypes;

        /**
         * Sets the value of {@link ServiceLogProps#getLogStorageLocation}
         * @param logStorageLocation Property logStorageLocation: The location of the service log. This parameter is required.
         * @return {@code this}
         */
        public Builder logStorageLocation(java.lang.String logStorageLocation) {
            this.logStorageLocation = logStorageLocation;
            return this;
        }

        /**
         * Sets the value of {@link ServiceLogProps#getLogStorageLocation}
         * @param logStorageLocation Property logStorageLocation: The location of the service log. This parameter is required.
         * @return {@code this}
         */
        public Builder logStorageLocation(com.aliyun.ros.cdk.core.IResolvable logStorageLocation) {
            this.logStorageLocation = logStorageLocation;
            return this;
        }

        /**
         * Sets the value of {@link ServiceLogProps#getProjectName}
         * @param projectName Property projectName: The name of the project that needs to be activated. This parameter is required.
         *                    If it has been activated, it will be reactivated again.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceLogProps#getProjectName}
         * @param projectName Property projectName: The name of the project that needs to be activated. This parameter is required.
         *                    If it has been activated, it will be reactivated again.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceLogProps#getServiceLogTypes}
         * @param serviceLogTypes Property serviceLogTypes: Types of service log that needs to be activated. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceLogTypes(com.aliyun.ros.cdk.core.IResolvable serviceLogTypes) {
            this.serviceLogTypes = serviceLogTypes;
            return this;
        }

        /**
         * Sets the value of {@link ServiceLogProps#getServiceLogTypes}
         * @param serviceLogTypes Property serviceLogTypes: Types of service log that needs to be activated. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceLogTypes(java.util.List<? extends java.lang.Object> serviceLogTypes) {
            this.serviceLogTypes = serviceLogTypes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceLogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceLogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceLogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceLogProps {
        private final java.lang.Object logStorageLocation;
        private final java.lang.Object projectName;
        private final java.lang.Object serviceLogTypes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logStorageLocation = software.amazon.jsii.Kernel.get(this, "logStorageLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceLogTypes = software.amazon.jsii.Kernel.get(this, "serviceLogTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logStorageLocation = java.util.Objects.requireNonNull(builder.logStorageLocation, "logStorageLocation is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.serviceLogTypes = java.util.Objects.requireNonNull(builder.serviceLogTypes, "serviceLogTypes is required");
        }

        @Override
        public final java.lang.Object getLogStorageLocation() {
            return this.logStorageLocation;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getServiceLogTypes() {
            return this.serviceLogTypes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logStorageLocation", om.valueToTree(this.getLogStorageLocation()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("serviceLogTypes", om.valueToTree(this.getServiceLogTypes()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.ServiceLogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceLogProps.Jsii$Proxy that = (ServiceLogProps.Jsii$Proxy) o;

            if (!logStorageLocation.equals(that.logStorageLocation)) return false;
            if (!projectName.equals(that.projectName)) return false;
            return this.serviceLogTypes.equals(that.serviceLogTypes);
        }

        @Override
        public final int hashCode() {
            int result = this.logStorageLocation.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.serviceLogTypes.hashCode());
            return result;
        }
    }
}
