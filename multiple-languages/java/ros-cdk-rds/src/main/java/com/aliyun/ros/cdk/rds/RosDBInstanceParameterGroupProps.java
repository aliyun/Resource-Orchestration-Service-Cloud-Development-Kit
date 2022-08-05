package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.266Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceParameterGroupProps.Jsii$Proxy.class)
public interface RosDBInstanceParameterGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameters();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForcerestart() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBInstanceParameterGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstanceParameterGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstanceParameterGroupProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object parameters;
        java.lang.Object forcerestart;

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getParameters}
         * @param parameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getParameters}
         * @param parameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameters(java.util.List<? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getForcerestart}
         * @param forcerestart the value to be set.
         * @return {@code this}
         */
        public Builder forcerestart(java.lang.String forcerestart) {
            this.forcerestart = forcerestart;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceParameterGroupProps#getForcerestart}
         * @param forcerestart the value to be set.
         * @return {@code this}
         */
        public Builder forcerestart(com.aliyun.ros.cdk.core.IResolvable forcerestart) {
            this.forcerestart = forcerestart;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstanceParameterGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstanceParameterGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceParameterGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceParameterGroupProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object parameters;
        private final java.lang.Object forcerestart;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forcerestart = software.amazon.jsii.Kernel.get(this, "forcerestart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.parameters = java.util.Objects.requireNonNull(builder.parameters, "parameters is required");
            this.forcerestart = builder.forcerestart;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getForcerestart() {
            return this.forcerestart;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("parameters", om.valueToTree(this.getParameters()));
            if (this.getForcerestart() != null) {
                data.set("forcerestart", om.valueToTree(this.getForcerestart()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstanceParameterGroupProps.Jsii$Proxy that = (RosDBInstanceParameterGroupProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!parameters.equals(that.parameters)) return false;
            return this.forcerestart != null ? this.forcerestart.equals(that.forcerestart) : that.forcerestart == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.parameters.hashCode());
            result = 31 * result + (this.forcerestart != null ? this.forcerestart.hashCode() : 0);
            return result;
        }
    }
}
