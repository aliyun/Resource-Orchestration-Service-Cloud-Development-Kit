package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::ImageEventOperation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.588Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ImageEventOperation")
public class ImageEventOperation extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IImageEventOperation {

    protected ImageEventOperation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImageEventOperation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ImageEventOperation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ImageEventOperation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Conditions: The rule conditions.
     * <p>
     * Specify a value in the JSON format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConditions() {
        return software.amazon.jsii.Kernel.get(this, "attrConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EventKey: Image Event Key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventKey() {
        return software.amazon.jsii.Kernel.get(this, "attrEventKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EventName: Image Event Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventName() {
        return software.amazon.jsii.Kernel.get(this, "attrEventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EventType: Image Event Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventType() {
        return software.amazon.jsii.Kernel.get(this, "attrEventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageEventOperationId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageEventOperationId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageEventOperationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Note: The remarks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNote() {
        return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperationCode: Event Operation Code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationCode() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Scenarios: Event Scenarios.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScenarios() {
        return software.amazon.jsii.Kernel.get(this, "attrScenarios", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Source: The source of the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSource() {
        return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.ImageEventOperation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.ImageEventOperation> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.ImageEventOperationProps.Builder();
        }

        /**
         * Property conditions: The rule conditions.
         * <p>
         * Specify a value in the JSON format. You can specify the following keys:
         * <p>
         * <ul>
         * <li><strong>condition</strong>: the matching condition.</li>
         * <li><strong>type</strong>: the matching type.</li>
         * <li><strong>value</strong>: the matching value.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param conditions Property conditions: The rule conditions. This parameter is required.
         */
        public Builder conditions(final com.aliyun.ros.cdk.core.IResolvable conditions) {
            this.props.conditions(conditions);
            return this;
        }
        /**
         * Property conditions: The rule conditions.
         * <p>
         * Specify a value in the JSON format. You can specify the following keys:
         * <p>
         * <ul>
         * <li><strong>condition</strong>: the matching condition.</li>
         * <li><strong>type</strong>: the matching type.</li>
         * <li><strong>value</strong>: the matching value.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param conditions Property conditions: The rule conditions. This parameter is required.
         */
        public Builder conditions(final java.util.Map<java.lang.String, ? extends java.lang.Object> conditions) {
            this.props.conditions(conditions);
            return this;
        }

        /**
         * Property eventType: Image Event Type.
         * <p>
         * @return {@code this}
         * @param eventType Property eventType: Image Event Type. This parameter is required.
         */
        public Builder eventType(final java.lang.String eventType) {
            this.props.eventType(eventType);
            return this;
        }
        /**
         * Property eventType: Image Event Type.
         * <p>
         * @return {@code this}
         * @param eventType Property eventType: Image Event Type. This parameter is required.
         */
        public Builder eventType(final com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.props.eventType(eventType);
            return this;
        }

        /**
         * Property operationCode: Event Operation Code.
         * <p>
         * @return {@code this}
         * @param operationCode Property operationCode: Event Operation Code. This parameter is required.
         */
        public Builder operationCode(final java.lang.String operationCode) {
            this.props.operationCode(operationCode);
            return this;
        }
        /**
         * Property operationCode: Event Operation Code.
         * <p>
         * @return {@code this}
         * @param operationCode Property operationCode: Event Operation Code. This parameter is required.
         */
        public Builder operationCode(final com.aliyun.ros.cdk.core.IResolvable operationCode) {
            this.props.operationCode(operationCode);
            return this;
        }

        /**
         * Property eventKey: The keyword of the alert item.
         * <p>
         * @return {@code this}
         * @param eventKey Property eventKey: The keyword of the alert item. This parameter is required.
         */
        public Builder eventKey(final java.lang.String eventKey) {
            this.props.eventKey(eventKey);
            return this;
        }
        /**
         * Property eventKey: The keyword of the alert item.
         * <p>
         * @return {@code this}
         * @param eventKey Property eventKey: The keyword of the alert item. This parameter is required.
         */
        public Builder eventKey(final com.aliyun.ros.cdk.core.IResolvable eventKey) {
            this.props.eventKey(eventKey);
            return this;
        }

        /**
         * Property eventName: The name of the alert item.
         * <p>
         * @return {@code this}
         * @param eventName Property eventName: The name of the alert item. This parameter is required.
         */
        public Builder eventName(final java.lang.String eventName) {
            this.props.eventName(eventName);
            return this;
        }
        /**
         * Property eventName: The name of the alert item.
         * <p>
         * @return {@code this}
         * @param eventName Property eventName: The name of the alert item. This parameter is required.
         */
        public Builder eventName(final com.aliyun.ros.cdk.core.IResolvable eventName) {
            this.props.eventName(eventName);
            return this;
        }

        /**
         * Property note: The remarks that you want to add.
         * <p>
         * @return {@code this}
         * @param note Property note: The remarks that you want to add. This parameter is required.
         */
        public Builder note(final java.lang.String note) {
            this.props.note(note);
            return this;
        }
        /**
         * Property note: The remarks that you want to add.
         * <p>
         * @return {@code this}
         * @param note Property note: The remarks that you want to add. This parameter is required.
         */
        public Builder note(final com.aliyun.ros.cdk.core.IResolvable note) {
            this.props.note(note);
            return this;
        }

        /**
         * Property scenarios: The application scope of the rule.
         * <p>
         * The value is in the JSON format. Valid values of keys:
         * type
         * value
         * Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
         * <p>
         * @return {@code this}
         * @param scenarios Property scenarios: The application scope of the rule. This parameter is required.
         */
        public Builder scenarios(final com.aliyun.ros.cdk.core.IResolvable scenarios) {
            this.props.scenarios(scenarios);
            return this;
        }
        /**
         * Property scenarios: The application scope of the rule.
         * <p>
         * The value is in the JSON format. Valid values of keys:
         * type
         * value
         * Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
         * <p>
         * @return {@code this}
         * @param scenarios Property scenarios: The application scope of the rule. This parameter is required.
         */
        public Builder scenarios(final java.util.Map<java.lang.String, ? extends java.lang.Object> scenarios) {
            this.props.scenarios(scenarios);
            return this;
        }

        /**
         * Property source: The source of the whitelist.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: image.</li>
         * <li><strong>agentless</strong>: agentless detection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the whitelist. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The source of the whitelist.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: image.</li>
         * <li><strong>agentless</strong>: agentless detection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the whitelist. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.ImageEventOperation}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.ImageEventOperation build() {
            return new com.aliyun.ros.cdk.threatdetection.ImageEventOperation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
