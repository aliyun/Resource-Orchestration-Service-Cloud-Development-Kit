package com.aliyun.ros.cdk.drds.datasource;

/**
 * Properties for defining a <code>DrdsDB</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.025Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.DrdsDBProps")
@software.amazon.jsii.Jsii.Proxy(DrdsDBProps.Jsii$Proxy.class)
public interface DrdsDBProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property drdsDatabaseName: The name of the Drds database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsDatabaseName();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DrdsDBProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DrdsDBProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DrdsDBProps> {
        java.lang.Object drdsDatabaseName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link DrdsDBProps#getDrdsDatabaseName}
         * @param drdsDatabaseName Property drdsDatabaseName: The name of the Drds database. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsDatabaseName(java.lang.String drdsDatabaseName) {
            this.drdsDatabaseName = drdsDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getDrdsDatabaseName}
         * @param drdsDatabaseName Property drdsDatabaseName: The name of the Drds database. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsDatabaseName(com.aliyun.ros.cdk.core.IResolvable drdsDatabaseName) {
            this.drdsDatabaseName = drdsDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DrdsDBProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DrdsDBProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DrdsDBProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DrdsDBProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DrdsDBProps {
        private final java.lang.Object drdsDatabaseName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.drdsDatabaseName = software.amazon.jsii.Kernel.get(this, "drdsDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.drdsDatabaseName = java.util.Objects.requireNonNull(builder.drdsDatabaseName, "drdsDatabaseName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDrdsDatabaseName() {
            return this.drdsDatabaseName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("drdsDatabaseName", om.valueToTree(this.getDrdsDatabaseName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.datasource.DrdsDBProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DrdsDBProps.Jsii$Proxy that = (DrdsDBProps.Jsii$Proxy) o;

            if (!drdsDatabaseName.equals(that.drdsDatabaseName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.drdsDatabaseName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
